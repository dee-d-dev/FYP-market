import React from "react";
import Table from "../components/Table3";
import AdminCustomerCSS from "../styles/admincategories.module.css";

const AdminCustomers = () => {
  return (
    <div className={AdminCustomerCSS.body}>
      <div className={AdminCustomerCSS.header}>
        <div>Customers</div>

        <div>
          <input type="text" placeholder="Ex: Search By Address" />
        </div>

        <select name="" id="">
          <option value="" selcted disabled>
            Order Option
          </option>
          <option value="">Lowest to Highest</option>
          <option value="">Highest to Lowest</option>
        </select>
      </div>

      <div className={AdminCustomerCSS.category_body}>
        <Table />
      </div>
    </div>
  );
};

export default AdminCustomers;
