import React from "react";
import SignUpCSS from "../styles/sign-up.module.css";

const SignUp = () => {
  return (
    <div>
      <div className={SignUpCSS.container}>
        <div className={SignUpCSS.modal}>
          <div className={SignUpCSS.modal_section_1}>
            <div className={SignUpCSS.brand_Logo}>
              <img src="/logo Copy.png" width="80px" alt="" />
            </div>
            <div className={SignUpCSS.modal_header}>
              <h2>Create an Account</h2>
              <p>welcome to the future of purchase</p>
            </div>

            <div className={SignUpCSS.modal_form}>
              <div className={SignUpCSS.form_first_row}>
                <div className={SignUpCSS.form_input}>
                  <label htmlFor="firstname">First name</label>
                  <input type="text" id="firstname" />
                </div>

                <div className={SignUpCSS.form_input}>
                  <label htmlFor="lastname">Last name</label>
                  <input type="text" id="lastname" />
                </div>
              </div>

              <div className={SignUpCSS.form_input}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>

              <div className={SignUpCSS.form_input}>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
              </div>

              <div className={SignUpCSS.form_input}>
                <select name="country" id="">
                  <option value="Nigeria">Nigeria</option>
                </select>
              </div>
            </div>

            <div className={SignUpCSS.choice}>
              <p>I want to:</p>
            </div>

            <div className={SignUpCSS.buttons}>
              <div className={SignUpCSS.choice_buttons}>
                <button className={SignUpCSS.seller_acc_btn}>
                  CREATE SELLER ACCOUNT
                </button>

                <button className={SignUpCSS.buyer_acc_btn}>
                  CREATE BUYER ACCOUNT
                </button>
              </div>
            </div>

            <div className={SignUpCSS.terms}>
              <input type="checkbox" name="terms" id="" />
              <p>
                Yes, I understand and agree to the <a href="#">Marketplace Terms of service</a>,
                including the <a href="#">User Agreement</a> and <a>Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
