import React from "react";
import SidebarCSS from "../styles/sidebar.module.css";
import SidebarData from "./SidebarData";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className={SidebarCSS.body}>
      {/* {SidebarData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <Link to={item.path}>
              <img src={item.icon} alt="" />
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })} */}
      <ul>
        <Link className={SidebarCSS.li}>
          <img src="/img/home.svg" alt="" />
          <p>Dashboard</p>
        </Link>
        <Link className={SidebarCSS.li} to="/adminproduct">
          <img src="/img/products.svg" alt="" />
          <p>Products</p>
        </Link>
        <Link className={SidebarCSS.li}>
          <img src="/img/category.svg" alt="" />
          <p>Categories</p>
        </Link>
        <Link className={SidebarCSS.li}>
          <img src="/img/order.svg" alt="" />
          <p>Orders</p>
        </Link>
        <Link className={SidebarCSS.li}>
          <img src="/img/customer.svg" alt="" />
          <p>Customers</p>
        </Link>
        <Link className={SidebarCSS.li}>
          <img src="/img/coupon.svg" alt="" />
          <p>Coupons</p>
        </Link>
        <Link className={SidebarCSS.li}>
          <img src="/img/settings.svg" alt="" />
          <p>Settings</p>
        </Link>
      </ul>

      <h3>Log Out</h3>
    </div>
  );
};

export default Sidebar;
