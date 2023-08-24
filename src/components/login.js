import React, { useState } from 'react';
import { CgClose, CgLogIn } from 'react-icons/cg';
import axios from 'axios';

function LoginForm() {
  // State variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to check if user account exists
      const response = await axios.post('http://127.0.0.1:8000/api/check-user', {
        email,
        password,
      });

      // Check if user account exists based on response
      if (response.data.match) {
        console.log('User account found!');
      } else {
        console.log('User account not found.');
      }
    } catch (error) {
      console.error('An error occurred.');
    }
  };

  return (
    <div className="login_form">
      <form onSubmit={handleSubmit}>
        <h2>
          <CgLogIn /> login
        </h2>
        <a href="/3D.S.F_stage" className="close">
          <CgClose />
        </a>
        <div className="input_box">
          <input
            type="email"
            placeholder="Enter your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="uil uil-envelope-alt email"></i>
        </div>
        <div className="input_box">
          <input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="uil uil-lock password"></i>
          <i className="uil uil-eye-slash pw_hide"></i>
        </div>
        <div className="option_field">
          <span className="checkbox">
            <input type="checkbox" id="check" />
            <label htmlFor="check">Remember me</label>
          </span>
          <a href="#" className="forgot_pw">
            Forgot password
          </a>
        </div>
        <button className="button" type="submit">
          sign in
        </button>

        <div className="login_signup">
          Don't have an account? <a href="/3D.S.F_stage/signup" id="signup">Signup</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
