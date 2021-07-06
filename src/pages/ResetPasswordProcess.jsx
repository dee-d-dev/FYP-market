import React from "react";
import ResetPasswordProcessCSS from "../styles/resetpasswordprocess.module.css";

const ResetProcess = () => {
  return (
    <div className={ResetPasswordProcessCSS.container}>
      <div className={ResetPasswordProcessCSS.modal}>
        <img
          src="/logo Copy.png"
          width="80px"
          alt=""
          className={ResetPasswordProcessCSS.logo}
        />
        <div className={ResetPasswordProcessCSS.modal_Section_1}>
          <div className={ResetPasswordProcessCSS.modal_Header}>
            <h2>Create new password</h2>
            <p>Please enter new password for verfera@gmail.com</p>
          </div>

          <form action="POST" className={ResetPasswordProcessCSS.modal_Form}>
            <label htmlFor="email address">New Password</label>
            <div className={ResetPasswordProcessCSS.form_Input}>
              <input type="password" id="email address" />
            </div>

            <label htmlFor="email address">Confirm new password</label>
            <div className={ResetPasswordProcessCSS.form_Input}>
              <input type="password" id="email address" />
            </div>

            <button type="submit" className={ResetPasswordProcessCSS.login_Btn}>
              Set new password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetProcess;
