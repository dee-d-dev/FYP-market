import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import dashboard from "../styles/admindashboard.module.css";
import Footer from "../components/footer";

const AdminDashboard = () => {
  return (
    <div>
      {/* <AdminNavbar /> */}
        {/* <Sidebar /> */}
      <div className={dashboard.body}>
        <div className={dashboard.main}>
          <div className={dashboard.row_1}>
            <div className={dashboard.row_1_col_1}>
              <h4 className={dashboard.col_1_row_1}>Target</h4>

              <div className={dashboard.col_1_row_2}>
                <img src="/img/target.svg" alt="" />
              </div>
              <div className={dashboard.col_1_row_3}>
                <div>
                  <h5>Weekly Targets</h5>

                  <h4>#500,000</h4>
                </div>
                <div>
                  <h5>Monthly Targets</h5>

                  <h4>#200,000</h4>
                </div>
              </div>
            </div>

            <div className={dashboard.col_2}>
              <h4 className={dashboard.col_2_row_1}>User Hit Rate</h4>
            </div>
          </div>

          <div className={dashboard.row_2}>
            <div className={dashboard.row_2_col}>
              <div className={dashboard.row_2_col_1_row_1}>
                <h4>Total Revenue</h4>
                <p>(Last 30 days)</p>
              </div>
              <div className={dashboard.row_2_col_1_row_2}>
                <h4>#5,000</h4>
                <p>
                  <span>Revenue up</span>(previous 30 days)
                </p>
              </div>
              <div className={dashboard.row_2_col_1_row_3}>
                <h5>Full Details</h5>
              </div>
            </div>
            <div className={dashboard.col}>f</div>
            <div className={dashboard.col}>f</div>
            <div className={dashboard.col}>g</div>
          </div>

          <div className={dashboard.row_3}>
            <h4>Sale History</h4>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminDashboard;
