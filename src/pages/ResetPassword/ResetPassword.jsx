import React from "react";
import ResetCSS from "./resetpassword.module.css";

const ResetPassword = () => {
  return (
    <div>
    <div className={ResetCSS.container}>
      <div className={ResetCSS.modal}>
        <img src="/logo Copy.png" width="80px" alt="" className={ResetCSS.logo}/>
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
              <input type="password" id="email address" />
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
    <div class={ResetCSS.online__project}>
      <div>
          Project is an ongoing project <br/><br/>
          Please Kindly Check My Ongoing Project on Desktop Mode
      </div>
    </div>
    </div>
  );
};

export default ResetPassword;
