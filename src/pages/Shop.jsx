import React from "react";
import ShopCSS from "../styles/shop.module.css";

const Shop = () => {
  return (
    <div>
      <div className={ShopCSS.header}>
        <img src="/logo copy.png" width="80px" alt="" />

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Fruits & Vegetables</li>
          <li>Shop</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>

        <ul>
          <li>cart</li>
          <li>favourites</li>
          <li>search</li>
        </ul>
      </div>

      <div className={ShopCSS.page_title}>
        <div className="text">
          <h1>SHOP PRODUCTS</h1>
          <p>Enjoy unbeatable deals on every products you buy on Marketplace today</p>
        </div>
      </div>

      <div className={ShopCSS.main}>
          jdjd
      </div>
    </div>
  );
};

export default Shop;
