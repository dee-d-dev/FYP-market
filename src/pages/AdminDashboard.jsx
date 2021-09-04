import React, { useState, Utils } from "react";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import dashboard from "../styles/admindashboard.module.css";
import Footer from "../components/footer";
import { Bar, Line, Doughnut } from "react-chartjs-2";

const AdminDashboard = () => {
  const [chart, setChart] = useState({
    chartData: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          data: [55, 50, 65, 37, 59, 65, 84, 76, 63, 87, 92, 110],
          backgroundColor: ["#08862D"],
        },
      ],
    },
  });

  const [rate, setRate] = useState({
    chartRate: {
      labels: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      datasets: [
        {
          data: [200, 100, 650, 400, 200, 50, 630, 70],
          backgroundColor: ["#08862D"],
        },
      ],
    },
  });
  const [target, setTarget] = useState({
    chartTarget: {
      labels: ["weekly", "monthly"],
      datasets: [
        {
          data: [200, 100],
          backgroundColor: ["#F16243", "#08862D"],
        },
      ],
      maintainAspectRatio: false,
      hoverOffset: 1,
    },
  });
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
                <Doughnut
                  data={target.chartTarget}
                  width={1}
                  height={400}
                  options={{
                    title: {
                      display: false,
                    },
                    
                  }}
                />
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
              <div>
                <Line
                  data={rate.chartRate}
                  width={50}
                  height={20}
                  options={{
                    title: {
                      display: false,
                    },
                    pointBackgroundColor: "#F16243",
                    fill: "#F16243",
                    borderColor: "#F16243",
                    tension: 0.5,
                  }}
                />
              </div>
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
          </div>

          <div className={dashboard.row_3}>
            <h4>Sale History</h4>

            <div>
              <Bar
                data={chart.chartData}
                width={100}
                height={30}
                options={{
                  title: {
                    display: false,
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminDashboard;
