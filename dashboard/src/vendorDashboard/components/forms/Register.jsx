import React, { useState } from 'react';
import { API_URL } from '../../data/apiPath';

const Register = ({showLoginHandler}) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    
    if (!username || !email || !password) {
      alert("Please fill out all fields (Username, Email, and Password).");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await fetch(`${API_URL}/vendor/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
      });
  
      const data = await response.json();
  
      if (response.ok ) {
        
        alert("Owner registered successfully!");
        showLoginHandler();
        setUserName("");
        setEmail("");
        setPassword("");
        
        
      } else {

        if (data.message === "Email already exists") {
          alert("Email already exists. Please use a different one.");
        } else if (data.message === "Username already exists") {
          alert("Username already exists. Please choose another username.");
        } else {
          alert(data.message || "Registration failed. Please try again!");
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("Registration failed. Please try again!");
      alert("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="registerSection">
      <form className='authForm' onSubmit={handleSubmit}>
        <h3>Owner Register</h3>

        {error && <div className="error-message">{error}</div>}

        <label>Username</label>
        <input 
          type="text" 
          name='username' 
          value={username} 
          onChange={(e) => setUserName(e.target.value)} 
          placeholder="Enter your username" 
        />

        <label>Email</label>
        <input 
          type="email" 
          name='email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email" 
        />

        <label>Password</label>
        <input 
          type="password" 
          name='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter your password" 
        />

        <div className="btnSubmit">
          <button type='submit' disabled={loading}>
            {loading ? 'Registering...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;