import React,{useState} from 'react'
import { API_URL } from '../../data/apiPath';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/vendor/login`, {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Login success');
        setEmail("");
        setPassword("");
        localStorage.setItem('loginToken', data.token);
      } else {
        
        alert(data.error || data.message || "Login failed. Please check your credentials.");

      }
    } catch (error) {
      
      console.error(error);
      alert("Something went wrong. Please try again later.");
    }
  }
  

  return (
    <div className="loginSection">
      <form className='authForm' onSubmit={loginHandler}>
        <h3>Owner Login</h3>

        <label>Email</label>
        <input type="text" name='email'value={email}  onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter your email" />

        <label>Password</label>
        <input type="password" name='password'value={password} onChange={(e) =>{ setPassword(e.target.value)}} placeholder="Enter your password" />

        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login
