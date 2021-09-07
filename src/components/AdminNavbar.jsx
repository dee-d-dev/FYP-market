import React from "react";
import Navbar from "../styles/adminnavbar.module.css";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className={Navbar.body}>
      <Link className={Navbar.left} to="/">
        <img src="/img/adminlogo.svg" alt="" />
      </Link>

      <div className={Navbar.right}>
        <div className={Navbar.button}>
          <Link to="/addproduct">
            <button className={Navbar.add_btn}>Add Products</button>
          </Link>
        </div>

        <div className={Navbar.notification}>
          <img src="/img/notification.svg" alt="" />
        </div>

        <div className={Navbar.avatar}>
          <img src="/img/avatar.jpg" alt="" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
