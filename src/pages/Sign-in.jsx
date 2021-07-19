import React from "react";
import SignInCSS from "../styles/sign-in.module.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className={SignInCSS.container}>
      <div className={SignInCSS.brand_Logo}>
        <img src="/img/logo.png" width="80px" alt="" />
      </div>

      <div className={SignInCSS.modal}>
        <div className={SignInCSS.modal_Section_1}>
          <div className={SignInCSS.modal_Header}>
            <h2>Login to your account</h2>
            <p>Securely login your market place</p>
          </div>

          <form action="POST" className={SignInCSS.modal_Form}>
            <label htmlFor="email address">Email address</label>

            <div className={SignInCSS.form_Input}>
              <div className={SignInCSS.userIcon}>
                <img src="/img/user-icon.png" width="15px" alt="" />
              </div>
              <input type="password" id="email address" />
            </div>

            <button type="submit" className={SignInCSS.login_Btn}>
              Continue
            </button>
          </form>

          <div className={SignInCSS.segment}>
            <div className={SignInCSS.line}></div>
            <div>or</div>
            <div className={SignInCSS.line}></div>
          </div>

          <div className={SignInCSS.sign_In}>
            <button className={SignInCSS.google_Sign_In_Btn}>
              <img src="/img/google.png" width="25px" alt="" />
              <p>Sign in with Google</p>
            </button>
            <button className={SignInCSS.facebook_Sign_In_Btn}>
              <img src="/img/download.svg" width="25px" alt="" />
              <p>Sign in with Facebook</p>
            </button>
            <a href="/" className={SignInCSS.forgot_password}>
              Forgot Password?
            </a>
          </div>
        </div>

        <div className={SignInCSS.modal_section_2}>
          <div className={SignInCSS.modal_s_2_content}>
            <div className={SignInCSS.modal_s_2_header}>
              <div className={SignInCSS.line}></div>
              <div>New to Marketplace?</div>
              <div className={SignInCSS.line}></div>
            </div>

            <Link to="/Sign-up" className={SignInCSS.sign_up_btn}>
              <p>Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
