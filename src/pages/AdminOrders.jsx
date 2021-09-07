import React from "react";
import Table from "../components/Table2";
import AdminOrderCSS from "../styles/admincategories.module.css";

const AdminOrders = () => {
  return (
    <div className={AdminOrderCSS.body}>
      <div className={AdminOrderCSS.header}>
        <div>Orders</div>
        <div>
          <select name="" id="">
            <option value="" disabled selected>
              Status
            </option>
            <option value="">Delivered</option>
            <option value="">Pending</option>
            <option value="">Processing</option>
            <option value="">Failed</option>
          </select>
        </div>
        <div>
          <select name="" id="">
            <option value="" disabled selected>
              Order Limits
            </option>
            <option value="">Last 7 orders</option>
            <option value="">Last 10 orders</option>
            <option value="">Last 15 orders</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="Ex: Search By Address" />
        </div>
      </div>

      <div className={AdminOrderCSS.category_body}>
        <Table />
      </div>
    </div>
  );
};

export default AdminOrders;
