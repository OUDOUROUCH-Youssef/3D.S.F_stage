// LoginForm.js
import React from 'react';
function LoginForm() {
  return (
    <div className="login_form">
      <form action="#">
        <h2>login</h2>
        <div className="input_box">
          <input type="email" placeholder="Enter your Email" required />
          <i className="uil uil-envelope-alt email"></i>
        </div>
        <div className="input_box">
          <input type="password" placeholder="Enter your password" required />
          <i className="uil uil-lock password"></i>
          <i className="uil uil-eye-slash pw_hide"></i>
        </div>
        <div className="option_field">
          <span className="checkbox">
            <input type="checkbox" id="check" />
            <label htmlFor="check">Remember me</label>
          </span>
          <a href="#" className="forgot_pw">Forgot password</a>

        </div>
        <button className="button">sign in</button>

        <div className="login_signup">
          Don't have an account? <a href="/3D.S.F_stage/signup" id="signup">Signup</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
