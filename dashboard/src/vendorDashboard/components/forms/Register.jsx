import React from 'react'

const Register = () => {

  return (
    <div className="registerSection">
        <form className='authForm' >

        <h3>Owner Register</h3>

        <label>Username</label>
        <input  type="text" name = 'username'  placeholder="Enter your username" />

        <label>Email</label>
        <input  type="text" name = 'email'  placeholder="Enter your email" />        

        <label>Password</label>
        <input  type="password"  name = 'password'   placeholder="Enter your password" />

        <div className="btnSubmit">
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Register