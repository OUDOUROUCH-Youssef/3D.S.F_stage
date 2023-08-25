import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false); // Track error state
  const [showemailError, setShowemailError] = useState(false);

  const history = useNavigate(); // Access the navigation history object

  const handleSubmit = async (e) => {
    e.preventDefault();


    setShowemailError(false);

    if (password !== confirmPassword) {
      setShowPasswordError(true); // Show error if passwords don't match
      return; // Don't proceed if passwords don't match
    }

    setShowPasswordError(false); // Hide error if passwords match
    

    


    // Create a data object with form fields
    const formData = {
      email,
      password,
    };

    try {
      // Send data to the backend using Axios
      const response = await axios.post('http://127.0.0.1:8000/', formData); // Replace with your backend endpoint

      // Handle success or do something with the response
      console.log('Response:', response.data);
      

      

      if (response.data.exists) {
        setShowemailError(true);

        console.log(showemailError);
        console.log('alredy have an account!');
      } else {
        setShowemailError(false);
        console.log('account created.');
        history('/3D.S.F_stage/login');
        
        
      }

    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }

    

    


  };

  return (
    <div className="signup_form">
      <form onSubmit={handleSubmit} >
        <h2>Signup</h2>
        <a href='/3D.S.F_stage' className='close'><CgClose/></a>
        <div className="input_box">
          <input
            type="email"
            name='email'
            placeholder="Enter your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={
              showemailError
                ? { borderColor: 'red', backgroundColor: '#fee', outlineColor: 'red' }
                : {}
            }
          />

          {showemailError && (
            <span className="error_message">alredy have an account!</span>
          )}

          <i className="uil uil-envelope-alt email"></i>
        </div>
        <div className="input_box">
          <input
            type="password"
            name='password1'
            placeholder="create your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="uil uil-lock password"></i>
          <i className="uil uil-eye-slash pw_hide"></i>
        </div>

        <div className="input_box">
          <input
            type="password"
            placeholder="confirm your password"
            name='password2'
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={
              showPasswordError
                ? { borderColor: 'red', backgroundColor: '#fee', outlineColor: 'red' }
                : {}
            }
          />
          {showPasswordError && (
            <span className="error_message">Passwords don't match</span>
          )}
          <i className="uil uil-lock password"></i>
          <i className="uil uil-eye-slash pw_hide"></i>
        </div>

        <button type="submit" className="button" id='button_signup'>
          Signup
        </button>
        
        <div className="login_signup">
          Already have an account? <a href="/3D.S.F_stage/login" id="login">Login</a>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
