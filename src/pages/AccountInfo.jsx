import React from "react";
import Footer from "../components/footer";
import AccCSS from "../styles/accountInfo.module.css";
import { Link } from "react-router-dom";

const AccountInfo = () => {
  return (
    <div>
      <div className={AccCSS.acc_body}>
        <div className={AccCSS.content}>
          <div className={AccCSS.left}>
            <div className={AccCSS.acc_functions}>
              <h2>My Account</h2>

              <ul>
                <li>
                  <img src="/img/orderIcon.svg" alt="" />
                  <p>Orders</p>
                </li>
                <li>
                  <img src="/img/pendingIcon.svg" alt="" />
                  <p>Pending Reviews</p>
                </li>
                <li>
                  <img src="/img/coupon.svg" alt="" />
                  <p>Coupons</p>
                </li>
                <li>
                  <img src="/img/favorite.svg" alt="" />
                  <p>Saved Items</p>
                </li>
                <li>
                  <img src="/img/recently.svg" alt="" />
                  <p>Recently viewed</p>
                </li>
              </ul>
            </div>

            <div className={AccCSS.transaction_details}>
              <h3>Details</h3>

              <ul>
                <li>
                  <p>Address Book</p>
                </li>
                <li>
                  <p>Change Password</p>
                </li>
                <li>
                  <p>Newsletter Preferences</p>
                </li>
              </ul>

              <h2>LOG OUT</h2>
            </div>
          </div>

          <div className={AccCSS.right}>
            <h3>Account Overview</h3>

            <div className={AccCSS.upload}>
              <div className={AccCSS.upload_btn}>
                <button>Upload your picture here</button>
              </div>
              <div className={AccCSS.upload_svg}>
                <img src="/img/upload.svg" alt="" />
              </div>
            </div>

            <div className={AccCSS.acc_info}>
              <div className={AccCSS.acc_details}>
                <div className={AccCSS.acc_details_header}>
                  <div>
                    <h4>ACCOUNT DETAILS</h4>
                  </div>

                  <div>
                    <img src="/img/pen.svg" alt="" />
                  </div>
                </div>

                <div className={AccCSS.acc_details_body}>
                  <div className={AccCSS.profileName}>
                    <p className={AccCSS.usernameText}>Username:</p>
                    <p className={AccCSS.username}>John slaw</p>
                  </div>

                  <div className={AccCSS.acc_name}>
                    <p>James Emmanuel Olawale</p>
                  </div>

                  <div className={AccCSS.acc_mail}>
                    <p>joshuaolawale@gmail.com</p>
                  </div>

                  <Link to="/" className={AccCSS.change_password}>
                    CHANGE PASSWORD
                  </Link>
                </div>
              </div>

              <div className="address_book">
                <div className={AccCSS.address_book}>
                  <div className={AccCSS.address_book_header}>
                    <div>
                      <h4>ADDRESS BOOK</h4>
                    </div>

                    <div>
                      <img src="/img/pen.svg" alt="" />
                    </div>
                  </div>

                  <div className={AccCSS.address_book_body}>
                    <div className={AccCSS.address_title}>
                      Your default shipping address
                    </div>

                    <p className={AccCSS.client_name}>Joshua Olawale</p>
                    <p className={AccCSS.client_address}>
                      N19, Block 45 Isolo, Nigeria street, Lagos state,
                      Nigeria.... ISOLO OKOTA(OKE AFA), LAGOS. +234 8123353667
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountInfo;
