import React from "react";
import ResetSuccessCSS from "../styles/resetsuccess.module.css";

const ResetSuccess = () => {
  return (
    <div className={ResetSuccessCSS.container}>
      <div className={ResetSuccessCSS.modal}>
        <img
          src="/logo Copy.png"
          width="80px"
          alt=""
          className={ResetSuccessCSS.logo}
        />
        <div className={ResetSuccessCSS.modal_Section_1}>
          <h2>Successful password reset!</h2>

          <p>You can now use your new password to log in to your account</p>

          <button type="submit" className={ResetSuccessCSS.login_Btn}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetSuccess;
