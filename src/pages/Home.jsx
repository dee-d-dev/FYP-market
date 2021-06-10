import React from "react";
import "../styles/home.css";
import { useState } from "react";

const items = ["a", "b", "c", "d"];

const Home = () => {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(0);
  return (
    <div>
      <div className="header">
        <div className="brand">
          <img src="/logo.png" width="100px" alt="" />
        </div>

        <div className="search-section">
          <div>
            <input type="text" />
          </div>
          <div className="search-btn">
            <button>Search</button>
          </div>
        </div>

        <div className="cart-icon">
          <img src="/cart icon.png" alt="" />
          <div className="item-count">{count}</div>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Fruits & Vegetables</li>
          <li>Shop</li>
          <li>FAQ</li>
          <li>Contact</li>
          <li>Login</li>
          <li className="create-acc">Create a Free Account</li>
          <li className="love">
            <img src="/love.png" alt="" onClick={(e) => setLike(like + 1)} />
            <div className="love-count">{like}</div>
          </li>
        </ul>
      </div>

      <div className="section-1">
        <div className="display-board">
          <div className="d-b-top">
            <h1>
              Fresh <br /> <span>Vegetables</span>
            </h1>

            <div className="memo">
              <p>
                "Nevertheless, one should accept that the possibility of
                achieving core concept of the existing network, as far as the
                first class package is questionable, the product functionality.
                The modification is quite promising matter general tendency of
                the Effort of Primitive Position"
              </p>
            </div>

            <button className="shop-btn">SHOP NOW</button>
          </div>

          <div className="item-show">
            <ul>
              <li>
                <img src="/banana.png" alt="banana" width="80px" />
                <p>Fruits & Vegetables</p>
              </li>
              <li>
                <img src="/harvest.png" alt="banana" width="80px" />
                <p>Groceries & Staples</p>
              </li>
              <li>
                <img src="/rice.png" alt="banana" width="80px" />
                <p>Food Stuffs</p>
              </li>
              <li>
                <img src="/refrigerator.png" alt="banana" width="80px" />
                <p>Meat, Frozens and more</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-2">
        <div className="location">
          <p>Lagos</p>
          <img src="/Group.png" width="50px" alt="" />
        </div>

        <div className="item-cards">
          <div className="item-card vegetables-card">
            <div className="item-1">
              <div className="item-text">
                <p className="item-name vegetable">VEGETABLE</p>
                <p className="item-type">GREEN WORLD</p>
              </div>
              <div className="promo">Get 40% OFF selected items</div>

              <button className="learn-btn vegetable-btn">LEARN MORE ›</button>
            </div>
          </div>
          <div className="item-card fresh-fruits-card">
            <div className="item-2">
              <div className="item-text">
                <p className="item-name fresh-fruits">FRESH FRUITS</p>
                <p className="item-type">HEALTHY FOODS</p>
              </div>
              <div className="promo">Get 80% OFF selected items</div>

              <button className="learn-btn fresh-fruits-btn">
                LEARN MORE ›
              </button>
            </div>
          </div>
        </div>

        <div className="best-sell">
          <h1>BEST SELLER</h1>

          <div className="best-items">
            {items.map((item) => {
              return (
                <div className="item">
                  <div className="item-img"></div>
                  <div className="item-name">Fresh Water Melon</div>
                  <div className="item-stars">stars</div>
                  <div className="item-price">₦5000</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="section-3">
        <div className="s-3-top">
          <p className="call">HURRY UP!</p>
          <h1>DEALS OF THE WEEK</h1>
          <p className="text">
            "It's a well known fact that the lack of knowledge of cost of the
            competitive development and manufacturing requires urgent actions to
            be taken towards the technology of interrelational regulatinns"
          </p>
        </div>

        <div className="deals">
          <div className="deals-item">
            {items.map((item) => {
              return (
                <div className="d-item">
                  <div className="d-item-img"></div>
                  <div className="d-item-name">Fresh Fish</div>
                  <div className="d-item-stars">stars</div>
                  <div className="d-item-price">₦2000</div>
                </div>
              );
            })}

            {/* <div className="d-item">
              <div className="d-item-img"></div>
              <div className="d-item-name">Fresh Fish</div>
              <div className="d-item-stars">stars</div>
              <div className="d-item-price">₦2000</div>
            </div>
            <div className="d-item">
              <div className="d-item-img"></div>
              <div className="d-item-name">Fresh Fish</div>
              <div className="d-item-stars">stars</div>
              <div className="d-item-price">₦2000</div>
            </div>
            <div className="d-item">
              <div className="d-item-img"></div>
              <div className="d-item-name">Fresh Fish</div>
              <div className="d-item-stars">stars</div>
              <div className="d-item-price">₦2000</div>
            </div> */}
          </div>
        </div>

        <div className="services">
          <div className="service">
            <div className="service-icon">
              <img src="/delivery-truck.png" width="30px" alt="" />
            </div>
            <div className="service-text">
              <h4 className="service-head">Free & Next Day Delivery</h4>
              <p className="service-info">
                The Organization of User-Friendly Analysis
              </p>
            </div>
          </div>

          <div className="service">
            <div className="service-icon">
              <img src="/rating.png" width="27px" alt="" />
            </div>
            <div className="service-text">
              <h4 className="service-head">100% Satisfaction Gurantee</h4>
              <p className="service-info">
                The Organization of User-Friendly Analysis
              </p>
            </div>
          </div>

          <div className="service">
            <div className="service-icon">
              <img src="/discount.png" width="25px" alt="" />
            </div>
            <div className="service-text">
              <h4 className="service-head">The Great Daily Deals Discount</h4>
              <p className="service-info">
                The Organization of User-Friendly Analysis
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-4">
        <div>
          <ul className="company-infos">
            <li className="details">
              <div>
                <img
                  src="/footer logo.png"
                  width="100px"
                  className="brand"
                  alt="footer-logo"
                />
              </div>

              <ul className="company-contact">
                <li className="phone detail">
                  <div className="detail_icon">
                    <img src="/call_icon.png" alt="" />
                  </div>
                  <div>
                    <p>+234 812 2333 333</p>
                  </div>
                </li>
                <li className="mail detail">
                  <div className="detail_icon">
                    <img src="/mail_icon.png" alt="" />
                  </div>
                  <div>
                    <p>contact@themarketplace.com</p>
                  </div>
                </li>
                <li className="website detail">
                  <div className="detail_icon">
                    <img src="/website.png" alt="" />
                  </div>
                  <div>
                    <p>www.themarketplace.com</p>
                  </div>
                </li>
              </ul>
            </li>
            <li className="locations">
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

        <div className="footer">
          <div className="copyrights">
            ©copyright 2020, Ninja Creative Studio, All rights reserved
          </div>

          <div className="social-media">
            <div className="facebook">fb icon</div>
            <div className="instagram">IG icon</div>
            <div className="twitter">Twitter icon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
