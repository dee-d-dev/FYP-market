import React from "react";
import Table from "../components/Table";
import AdminCatCSS from "../styles/admincategories.module.css";

const AdminCategories = () => {
  return (
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
       <Table/>
      </div>
    </div>
  );
};

export default AdminCategories;
