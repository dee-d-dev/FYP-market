import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import AdminDashboard from "./AdminDashboard";
import AdminCSS from "../styles/admin.module.css";
import Footer from "../components/footer";
import AdminProduct from "./AdminProduct";
import AdminAddProducts from "./AdminAddProducts";
import AdminCategories from "./AdminCategories";
import AdminOrders from "./AdminOrders";
import AdminCustomers from "./AdminCustomers";

const Admin = () => {
  return (
    <div>
      <AdminNavbar />
      <div className={AdminCSS.body}>
        <Sidebar />
        {/* <AdminDashboard /> */}
        {/* <AdminProduct/> */}
        {/* <AdminAddProducts/> */}
        {/* <AdminCategories/> */}
        {/* <AdminOrders /> */}
        <AdminCustomers />
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
