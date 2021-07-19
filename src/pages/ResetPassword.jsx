import React from "react";
import ResetCSS from "../styles/resetpassword.module.css";

const ResetPassword = () => {
  return (
    <div className={ResetCSS.container}>
      <div className={ResetCSS.modal}>
        <img src="/img/logo Copy.png" width="80px" alt="" className={ResetCSS.logo}/>
        <div className={ResetCSS.modal_Section_1}>
          <div className={ResetCSS.modal_Header}>
            <h2>Reset your password</h2>
            <p>
              Enter the e-mail associated with your account. We will send link
              to this email address to reset your password
            </p>
          </div>

          <form action="POST" className={ResetCSS.modal_Form}>
            <label htmlFor="email address">Enter your e-mail address</label>

            <div className={ResetCSS.form_Input}>
              <input type="email" id="email address" />
            </div>

            <button type="submit" className={ResetCSS.login_Btn}>
              Send link
            </button>
          </form>

          <div className={ResetCSS.links}>
            <a href="/" className={ResetCSS.login_link}>
              Return to Login
            </a>

            <a href="/" className={ResetCSS.signup_link}>
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
