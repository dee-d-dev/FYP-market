import React from "react";
import productCSS from "../styles/adminproduct.module.css";

const AdminProduct = () => {
  return (
    <div className={productCSS.product}>
      <div className={productCSS.product_header}>
        <div className="product_title">Products</div>

        <div>
          <select name="" id="">
            <option value="val1" selected disabled hidden>
              Category Type
            </option>
            <option value="">Vegetables</option>
          </select>
        </div>
        <div>
          <select name="" id="">
            <option value="val1" selected disabled hidden>
              Price
            </option>
            <option value="">Highest to Lowest</option>
            <option value="">Lowest to Highest</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="Ex: Search by name" />
        </div>
      </div>

      <div className={productCSS.product_items}>
        <div className={productCSS.item}>
          <div className={productCSS.item_img}>
            <img src="/img/Mangoes.png" width="100%" alt="" />
          </div>

          <div className={productCSS.item_title}>Apple</div>

          <div className={productCSS.item_price}>#2500</div>

          <div className={productCSS.item_prev_price}>#3000</div>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
