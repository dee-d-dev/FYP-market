import React from "react";
import "../styles/sign-in.css";

const SignIn = () => {
  return (
    <div className="container">
      <div className="brand-logo">
          <img src="/logo.png" width="80px" alt="" />
      </div>

      <div className="modal">
        <div className="modal-section-1">
          <div className="modal-header">
            <h2>Login to your account</h2>
            <p>Securely login your market place</p>
          </div>

          <form action="POST" class="modal-form">
            <label htmlFor="email address">Email address</label>

            <div className="form-input">
              <div className="userIcon">
                <img src="/user-icon.png" width="15px" alt="" />
              </div>
              <input type="text" id="email address" />
            </div>

            <button type="submit" className="submit-btn login-btn">
              Continue
            </button>
          </form>

          <div className="segment">
            <div className="line"></div>
            <div>or</div>
            <div className="line"></div>
          </div>

          <div className="sign-in">
            <button className="google submit-btn">
              <img src="/google.png" width="25px" alt="" />
              <p>Sign in with Google</p>
            </button>
            <button className="facebook submit-btn">
              <img src="/download.svg" width="25px" alt="" />
              <p>Sign in with Facebook</p>
            </button>
            <a href="/" className="forgot_password">
              Forgot Password?
            </a>
          </div>
        </div>

        <div className="modal-section-2">
          <div className="modal-s-2-content">
            <div className="modal-s-2-header">
              <div className="line"></div>
              <div>New to Marketplace?</div>
              <div className="line"></div>
            </div>

            <button className="sign-up-btn submit-btn"><p>Sign Up</p></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
