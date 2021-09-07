import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import AdminCatCSS from "../styles/admincategories.module.css";

const AdminCategories = () => {
  return (
    <div>
      <AdminNavbar />
      <div className={AdminCatCSS.outerbody}>
        <Sidebar />
        <div className={AdminCatCSS.body}>
          <div className={AdminCatCSS.header}>
            <div>Category</div>
            <div>
              <select name="" id="">
                <option value="" disabled selected>
                  Category type
                </option>
              </select>
            </div>
            <div>
              <input type="text" />
            </div>
            <div>
              <button>+ Add Category</button>
            </div>
          </div>

          <div className={AdminCatCSS.category_body}>
            <Table />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AdminCategories;
