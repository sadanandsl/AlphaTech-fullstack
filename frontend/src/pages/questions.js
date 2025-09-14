import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Questions() {
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const { subcategory_id } = useParams();

  useEffect(() => {
    setShowExplanation(false);
    setSelectedQuestionId(null);
  
    fetch(`http://127.0.0.1:8000/api/${subcategory_id}/questions/`) 
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Log the fetched data
        setQuestions(data);
      })
      .catch(error => console.error('Error fetching questions:', error));
  }, [subcategory_id]);

  const handleOptionSelect = (questionId, optionIndex) => {
    const selectedQuestion = questions.find(question => question.id === questionId);

    if (selectedQuestion) {
      const isCorrect = selectedQuestion.correct_option === optionIndex;

      setSelectedOptions(prevSelectedOptions => ({
        ...prevSelectedOptions,
        [questionId]: { optionIndex, isCorrect },
      }));

      setShowExplanation(!isCorrect);
      setSelectedQuestionId(questionId);
    }
  };

  const getOptionStyle = (questionId, optionIndex) => {
    const isSelected = selectedOptions[questionId] && selectedOptions[questionId].optionIndex === optionIndex;
    const isCorrect = isSelected && selectedOptions[questionId].isCorrect;

    return {
      backgroundColor: isSelected ? (isCorrect ? 'green' : 'red') : 'white',
      color: isSelected ? 'white' : 'black',
      cursor: isSelected ? 'default' : 'pointer',
    };
  };

  return (
    <div className="questions-container">
      <h2> </h2>
      <form className="questions-form">
        <ol className="questions-list">
          {questions.map((question, index) => (
            <li key={question.id} className="question-item">
              <p className="question-text">{index + 1}: {question.text}</p>
              <ul className="options-list">
                {question.options.map((option, optionIndex) => (
                  <li
                    key={optionIndex}
                    className="option-item"
                    style={getOptionStyle(question.id, optionIndex)}
                    onClick={() => handleOptionSelect(question.id, optionIndex)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
              {showExplanation && selectedQuestionId === question.id && (
                <div className="explanation-container">
                  {selectedOptions[question.id] && selectedOptions[question.id].isCorrect ? (
                    <p className="explanation correct-explanation">Correct Answer Explanation: {question.explanation}</p>
                  ) : (
                    <p className="explanation incorrect-explanation">Incorrect Answer Explanation: {question.explanation}</p>
                  )}
                </div>
              )}
            </li>
          ))}
        </ol>
      </form>
    </div>
  );
}

export default Questions;
