import React, { useState } from 'react';
import log from '../images/log.svg';
import register from '../images/register.svg';

import '../css/login.css';
function Login() {

  const [signUpMode, setSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  return (
    <div className={`login-container ${signUpMode ? 'sign-up-mode' : ''}`} >
      <div className="login-forms-container">
        <div className="login-signin-signup">
          <form action="" className="login-sign-in-form">
            <h2 className="login-title">Sign In</h2>
            <div className="login-input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="login-input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="login-btn solid" />
            <p className="login-social-text">Or Sign in with social platforms</p>
            <div className="login-social-media">
              <a href="#" className="login-social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="login-social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="login-social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="login-social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="" className="login-sign-up-form">
            <h2 className="login-title">Sign Up</h2>
            <div className="login-input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="login-input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="login-input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign Up" className="login-btn solid" onClick={handleSignUpClick} />
            <p className="login-social-text">Or Sign up with social platforms</p>
            <div className="login-social-media">
              <a href="#" className="login-social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="login-social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="login-social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="login-social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="login-panels-container">
        <div className="login-panel login-left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
            <button className="login-btn transparent" id="sign-up-btn">Sign Up</button>
          </div>
          <img src={log} className="login-image" alt="" />
        </div>
        <div className="login-panel login-right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
            <button className="login-btn transparent" id="sign-in-btn" onClick={handleSignInClick}>Sign In</button>
          </div>
          <img src={register} className="login-image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
