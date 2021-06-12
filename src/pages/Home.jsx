import React from "react";
import HomeCSS from "../styles/home.module.css";
import { useState } from "react";
import {Link} from 'react-router-dom'

const items = ["a", "b", "c", "d"];

const Home = () => {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(0);
  return (
    <div>
      <div className={HomeCSS.header}>
        <div className={HomeCSS.brand}>
          <img src="/logo.png" width="100px" alt="" />
        </div>

        <div className={HomeCSS.search_section}>
          <div>
            <input type="text" />
          </div>
          <div className={HomeCSS.search_btn}>
            <button>Search</button>
          </div>
        </div>

        <div className={HomeCSS.cart_icon}>
          <img src="/cart icon.png" alt="" />
          <div className={HomeCSS.item_count}>{count}</div>
        </div>
      </div>

      <div className={HomeCSS.navigation}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Fruits & Vegetables</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
          <li className={HomeCSS.create_acc}>
            <Link to="/sign-in">Create a Free Account</Link>
          </li>
          <li className={HomeCSS.love}>
            <img src="/love.png" alt="" onClick={(e) => setLike(like + 1)} />
            <div className={HomeCSS.love_count}>{like}</div>
          </li>
        </ul>
      </div>

      <div className={HomeCSS.section_1}>
        <div className={HomeCSS.display_board}>
          <div className={HomeCSS.d_b_top}>
            <h1>
              Fresh <br /> <span>Vegetables</span>
            </h1>

            <div className={HomeCSS.memo}>
              <p>
                "Nevertheless, one should accept that the possibility of
                achieving core concept of the existing network, as far as the
                first class package is questionable, the product functionality.
                The modification is quite promising matter general tendency of
                the Effort of Primitive Position"
              </p>
            </div>

            <button className={HomeCSS.shop_btn}>SHOP NOW</button>
          </div>

          <div className={HomeCSS.item_show}>
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

      <div className={HomeCSS.section_2}>
        <div className={HomeCSS.location}>
          <p>Lagos</p>
          <img src="/Group.png" width="50px" alt="" />
        </div>

        <div className={HomeCSS.item_cards}>
          <div className={HomeCSS.vegetables_card}>
            <div className={HomeCSS.item_1}>
              <div className={HomeCSS.item_text}>
                <p className={HomeCSS.vegetable}>VEGETABLE</p>
                <p className={HomeCSS.item_type}>GREEN WORLD</p>
              </div>
              <div className={HomeCSS.promo}>Get 40% OFF selected items</div>

              <button className={HomeCSS.vegetable_btn}>LEARN MORE ›</button>
            </div>
          </div>
          <div className={HomeCSS.fresh_fruits_card}>
            <div className={HomeCSS.item_2}>
              <div className={HomeCSS.item_text}>
                <p className={HomeCSS.fresh_fruits}>FRESH FRUITS</p>
                <p className={HomeCSS.item_type}>HEALTHY FOODS</p>
              </div>
              <div className={HomeCSS.promo}>Get 80% OFF selected items</div>

              <button className={HomeCSS.fresh_fruits_btn}>
                LEARN MORE ›
              </button>
            </div>
          </div>
        </div>

        <div className={HomeCSS.best_sell}>
          <h1>BEST SELLER</h1>

          <div className={HomeCSS.best_items}>
            {items.map((item) => {
              return (
                <div className={HomeCSS.item}>
                  <div className={HomeCSS.item_img}></div>
                  <div className={HomeCSS.item_name}>Fresh Water Melon</div>
                  <div className={HomeCSS.item_stars}>stars</div>
                  <div className={HomeCSS.item_price}>₦5000</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={HomeCSS.section_3}>
        <div className={HomeCSS.s_3_top}>
          <p className={HomeCSS.call}>HURRY UP!</p>
          <h1>DEALS OF THE WEEK</h1>
          <p className={HomeCSS.text}>
            "It's a well known fact that the lack of knowledge of cost of the
            competitive development and manufacturing requires urgent actions to
            be taken towards the technology of interrelational regulatinns"
          </p>
        </div>

        <div className={HomeCSS.deals}>
          <div className={HomeCSS.deals_item}>
            {items.map((item) => {
              return (
                <div className={HomeCSS.d_item}>
                  <div className={HomeCSS.d_item_img}></div>
                  <div className={HomeCSS.d_item_name}>Fresh Fish</div>
                  <div className={HomeCSS.d_item_stars}>stars</div>
                  <div className={HomeCSS.d_item_price}>₦2000</div>
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

        <div className={HomeCSS.services}>
          <div className={HomeCSS.service}>
            <div className={HomeCSS.service_icon}>
              <img src="/delivery-truck.png" width="30px" alt="" />
            </div>
            <div className={HomeCSS.service_text}>
              <h4 className={HomeCSS.service_head}>Free & Next Day Delivery</h4>
              <p className={HomeCSS.service_info}>
                The Organization of User-Friendly Analysis
              </p>
            </div>
          </div>

          <div className={HomeCSS.service}>
            <div className={HomeCSS.service_icon}>
              <img src="/rating.png" width="27px" alt="" />
            </div>
            <div className={HomeCSS.service_text}>
              <h4 className={HomeCSS.service_head}>100% Satisfaction Gurantee</h4>
              <p className={HomeCSS.service_info}>
                The Organization of User-Friendly Analysis
              </p>
            </div>
          </div>

          <div className={HomeCSS.service}>
            <div className={HomeCSS.service_icon}>
              <img src="/discount.png" width="25px" alt="" />
            </div>
            <div className={HomeCSS.service_text}>
              <h4 className={HomeCSS.service_head}>The Great Daily Deals Discount</h4>
              <p className={HomeCSS.service_info}>
                The Organization of User-Friendly Analysis
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={HomeCSS.section_4}>
        <div>
          <ul className={HomeCSS.company_infos}>
            <li className={HomeCSS.details}>
              <div>
                <img
                  src="/footer logo.png"
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

export default Home;
