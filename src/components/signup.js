// SignupForm.js
import React from 'react';
import '../App.css';
function SignupForm() {
  return (
    <div className="signup_form">
      <form action="#">
        <h2>Signup</h2>
        <div className="input_box">
          <input type="email" placeholder="Enter your Email" required />
          <i className="uil uil-envelope-alt email"></i>
        </div>
        <div className="input_box">
          <input type="password" placeholder="create your password" required />
          <i className="uil uil-lock password"></i>
          <i className="uil uil-eye-slash pw_hide"></i>
        </div>

        <div className="input_box">
          <input type="password" placeholder="confirm your password" required />
          <i className="uil uil-lock password"></i>
          <i className="uil uil-eye-slash pw_hide"></i>
        </div>

        <button className="button">Signup</button>
        
        <div className="login_signup">
          Already have an account? <a href="/3D.S.F_stage/login" id="login">Login</a>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;