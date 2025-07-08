import React, { useState } from 'react';
import './SignUp.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from './image/logo.png';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle Google login success
  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/google-auth/`, {
        token: credentialResponse.credential,
      });
      alert(res.data.message || "Google Sign-In successful!");
    } catch (err) {
      console.error("Google Sign-In failed:", err.response?.data || err.message);
      alert("Google Sign-In failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="form-section">
          <div className="logo-container">
            <span className="logo-icon"><img src={logo} alt='logo' /></span>
            <h1>LearnPro</h1>
          </div>
          <h3>Start your journey with a <span className="highlight">sign up</span> to learn.</h3>

          <form className="signup-form">
            <div className="form-group">
              <div className="input-wrapper">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="input-wrapper">
                <label>Email</label>
                <input type="email" placeholder="Enter your Email" required />
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" required />
              </div>
              <div className="input-wrapper">
                <label>Date of Birth</label>
                <input type="text" placeholder="Enter your date of birth" required />
              </div>
            </div>

            <div className="form-group">
              <div className="password-wrapper">
                <label>Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  required
                />
                {showPassword ? (
                  <FaEyeSlash className="eye-icon" onClick={() => setShowPassword(false)} />
                ) : (
                  <FaEye className="eye-icon" onClick={() => setShowPassword(true)} />
                )}
              </div>

              <div className="password-wrapper">
                <label>Confirm Password</label>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  required
                />
                {showConfirmPassword ? (
                  <FaEyeSlash className="eye-icon" onClick={() => setShowConfirmPassword(false)} />
                ) : (
                  <FaEye className="eye-icon" onClick={() => setShowConfirmPassword(true)} />
                )}
              </div>
            </div>

            <button className="signup-btn" type="submit">
              Sign up to Learn
            </button>

            <div className="divider">Or continue with Google</div>

            <div className="google-btn">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
                theme="filled_blue"
                size="large"
              />
            </div>
          </form>

          <p className="terms">
            By continuing, you agree to the <a href="#"><b>Terms of Service</b></a> applicable to <a href="#"><b>LearnPro</b></a> and confirm you read our <a href="#"><b>Privacy Policy</b></a>.
          </p>

          <p className="login-text">
            Already on LearnPro? <a href="#"><b>Login</b></a>
          </p>
        </div>

        <div className="image-section">
          <div className="image-grid">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="person1" />
            <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="person2" />
            <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="person3" />
            <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="person4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
