import React from 'react'

const Login = () => {
  return (
    <div className="loginSection">
      <form className='authForm'>
        <h3>Owner Login</h3>

        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Enter your password" />

        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login
