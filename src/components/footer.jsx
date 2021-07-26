import React from "react";
import HomeCSS from "../styles/home.module.css";


const Footer = () => {
  return (
    <div>
      <div className={HomeCSS.section_4}>
        <div>
          <ul className={HomeCSS.company_infos}>
            <li className={HomeCSS.details}>
              <div>
                <img
                  src="/img/footer logo.png"
                  width="100px"
                  className={HomeCSS.brand}
                  alt="footer-logo"
                />
              </div>

              <ul className={HomeCSS.company_contact}>
                <li className={HomeCSS.detail}>
                  <div className={HomeCSS.detail_icon}>
                    <img src="/call_icon.png" alt="" />
                  </div>
                  <div>
                    <p>+234 812 2333 333</p>
                  </div>
                </li>
                <li className={HomeCSS.detail}>
                  <div className={HomeCSS.detail_icon}>
                    <img src="/mail_icon.png" alt="" />
                  </div>
                  <div>
                    <p>contact@themarketplace.com</p>
                  </div>
                </li>
                <li className={HomeCSS.detail}>
                  <div className={HomeCSS.detail_icon}>
                    <img src="/website.png" alt="" />
                  </div>
                  <div>
                    <p>www.themarketplace.com</p>
                  </div>
                </li>
              </ul>
            </li>
            <li className={HomeCSS.locations}>
              <h3>TOP CITIES</h3>

              <ul>
                <li>Lagos</li>
                <li>Delta</li>
                <li>Calabar</li>
                <li>Port-Harcourt</li>
                <li>Abuja</li>
              </ul>
            </li>
            <li>
              <h3>CATEGORIES</h3>

              <ul>
                <li>Vegetables</li>
                <li>Groceries & Staples</li>
                <li>Breakfast & Daily</li>
                <li>Soft Drinks</li>
                <li>Biscuit & Cookies</li>
              </ul>
            </li>

            <li>
              <h3>ABOUT US</h3>

              <li>Company Information</li>
              <li>Careers</li>
              <li>Store Location</li>
              <li>Affiliate Program</li>
              <li>copyright</li>
            </li>
          </ul>
        </div>
        <div className={HomeCSS.footer}>
          <div className={HomeCSS.copyrights}>
            ©copyright 2020, Ninja Creative Studio, All rights reserved
          </div>

          <div className={HomeCSS.social_media}>
            <div className={HomeCSS.facebook}>fb icon</div>
            <div className={HomeCSS.instagram}>IG icon</div>
            <div className={HomeCSS.twitter}>Twitter icon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
