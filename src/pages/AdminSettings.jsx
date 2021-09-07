import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";
import SettingsCSS from "../styles/adminsettings.module.css";

const AdminSettings = () => {
  return (
    <div>
      <AdminNavbar/>
      <div className={SettingsCSS.outerbody}>
        <Sidebar />
        <div className={SettingsCSS.body}>
          <div className={SettingsCSS.grid}>
            <div className={SettingsCSS.section}>
              <div className={SettingsCSS.icon}>
                <img src="/img/addIcon.svg" alt="" />
              </div>
              <div>
                <h3>Staff Members</h3>
                <p>Manage your employees and their permission</p>
              </div>
            </div>
            <div className={SettingsCSS.section}>
              <div className={SettingsCSS.icon}>
                <img src="/img/settingsIcon.svg" alt="" />
              </div>

              <div>
                <h3>Site settings</h3>
                <p>View and edit your site settings</p>
              </div>
            </div>
            <div className={SettingsCSS.section}>
              <div className={SettingsCSS.icon}>
                <img src="/img/productIcon.svg" alt="" />
              </div>
              <div>
                <h3>Add Products</h3>
                <p>Add products from here</p>
              </div>
            </div>
            <div className={SettingsCSS.section}>
              <div className={SettingsCSS.icon}>
                <img src="/img/categoryIcon.svg" alt="" />
              </div>
              <div>
                <h3>Add Categories</h3>
                <p>Add product categories from here</p>
              </div>
            </div>
            <div className={SettingsCSS.section}>
              <div className={SettingsCSS.icon}>
                <img src="/img/staffIcon.svg" alt="" />
              </div>
              <div>
                <h3>Add Staff members</h3>
                <p>Add your staff members from here</p>
              </div>
            </div>
            <div className={SettingsCSS.section}>
              <div className={SettingsCSS.icon}>
                <img src="/img/couponIcon.svg" alt="" />
              </div>
              <div>
                <h3>Add Coupons</h3>
                <p>Add coupons from here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminSettings;
