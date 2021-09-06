import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import AdminDashboard from "./AdminDashboard";
import AdminCSS from "../styles/admin.module.css";
import Footer from "../components/footer";
import AdminProduct from "./AdminProduct";
import AdminAddProducts from "./AdminAddProducts";

const Admin = () => {
  return (
    <div>
      <AdminNavbar />
      <div className={AdminCSS.body}>
        <Sidebar />
        {/* <AdminDashboard /> */}
        {/* <AdminProduct/> */}
        <AdminAddProducts/>
      </div>
      <Footer/>
    </div>
  );
};

export default Admin;
