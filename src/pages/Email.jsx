import React from "react";
import EmailCSS from "../styles/email.module.css";

const Email = () => {
  return (
    <div className={EmailCSS.container}>
      <div className={EmailCSS.modal}>
        <img
          src="/logo Copy.png"
          width="80px"
          alt=""
          className={EmailCSS.logo}
        />
        <div className={EmailCSS.modal_Section_1}>
            <img src="/cuate.png" alt="" className={EmailCSS.modal_Section_img} />

            <h3>Check your mail</h3>

            <p>We have sent you an e-mail with instructions. Check your inbox and click on the link provided.</p>

            <a href="/">Home</a>
        </div>
      </div>
    </div>
  );
};

export default Email;
