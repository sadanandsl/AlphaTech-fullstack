import React, { useState, useEffect } from 'react';

function TestSec() {
  const [timer, setTimer] = useState(3000000); // 50 minutes in milliseconds
  const [testStarted, setTestStarted] = useState(false);
  const [testEnded, setTestEnded] = useState(false);
  const [score, setScore] = useState(0);
  const [alphasGained, setAlphasGained] = useState(0); 
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (testStarted && !testEnded) {
      interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1000 : 0));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [testStarted, testEnded]);

  const startTest = async () => {
    await fetchQuestions();
    setTestStarted(true);
  };

  const endTest = () => {
    setTestStarted(false);
    setTestEnded(true);
    calculateScore();
  };

  const fetchQuestions = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/test-questions/');
      const data = await response.json();
      setQuestions(data); 
      const initialAnswers = {};
      data.forEach((question) => {
        initialAnswers[question.id] = null;
      });
      setSelectedAnswers(initialAnswers);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAnswerChange = (questionId, selectedOption) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach((question) => {
      const selectedOption = selectedAnswers[question.id];
      if (selectedOption === question.correct_option) {
        correctAnswers += 1;
      }
    });
    const totalQuestions = questions.length;
    const calculatedScore = (correctAnswers / totalQuestions) * 100;
  
    setScore(calculatedScore);
  
    // Calculate Alphas gained where 3 correct questions equal 1 Alpha
    const alphasGained = Math.floor(correctAnswers / 3);
    setAlphasGained(alphasGained);
  };
  

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const submitTest = () => {
    endTest();
  };

  const renderQuizContent = () => {
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div className="quiz-content">
        <h5>Question {currentQuestionIndex + 1}</h5>
        <p className='question'>{currentQuestion.text}</p>
        <form className='options'>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index} className="option">
                <input
                  type="radio"
                  value={index}
                  checked={selectedAnswers[currentQuestion.id] === index}
                  onChange={() => handleAnswerChange(currentQuestion.id, index)}
                />
                <label>{option}</label>
              </li>
            ))}
          </ul>
        </form>
        <div className="navigation-buttons">
          {currentQuestionIndex > 0 && (
            <button onClick={goToPreviousQuestion}>Previous</button>
          )}
          {currentQuestionIndex < questions.length - 1 && (
            <button onClick={goToNextQuestion}>Next</button>
          )}
          {currentQuestionIndex === questions.length - 1 && (
            <button onClick={submitTest}>Submit Test</button>
          )}
        </div>
      </div>
    );
  };

  const renderTimer = () => {
    const minutes = Math.floor(timer / 60000);
    const seconds = Math.floor((timer % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="containersec">
      <div className="center test-info">
        {testEnded ? (
          <div className="thank-you">
            <h5>Thank You for Taking the Test</h5>
            <p className="score">Your Score: {score}%</p>
            <p className="alphas-gained">Alphas Gained: {alphasGained}</p>
          </div>
        ) : (
          <>
            <p>Time Remaining: {renderTimer()}</p>
            <p>Click "Start Test" to begin the test. The timer will run for 50 minutes.</p>
            {testStarted && <p className="test-in-progress">Test in Progress</p>}
          </>
        )}
      </div>
      {testStarted && !testEnded && questions.length > 0 && renderQuizContent()}
      {!testStarted && !testEnded && <button onClick={startTest}>Start Test</button>}
    </div>
  );
}

export default TestSec;

