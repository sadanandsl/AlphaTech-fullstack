import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/Images/logo.png'; 

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }), 
      });

      if (response.ok) {
       
        setSignupSuccess(true);
      } else {
       
        const data = await response.json();
        setError(data.error || 'Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('Signup failed');
    }
  }

  return (
    <div className="signup-container">
      <img src={logo} alt="Your Logo" style={{ marginBottom: '20px', marginLeft:'60px',width: '200px', height: 'auto' }} />
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="signup-button" type="submit">Sign Up</button>
      </form>
      {signupSuccess && <p className="success-message">User created successfully!</p>}
      {error && <p className="error-message">{error}</p>}
      <p>
        Already have an account? <Link to="/login">Login</Link> 
      </p>
    </div>
  );
}

export default Signup;
