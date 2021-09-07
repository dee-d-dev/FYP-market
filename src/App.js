import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/Sign-in";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/Sign-up";
import ResetPassword from "./pages/ResetPassword";
import Email from "./pages/Email";
import ResetPasswordProcess from "./pages/ResetPasswordProcess";
import ResetSuccess from "./pages/ResetSuccess";
import Shop from "./pages/Shop";
import AccountInfo from "./pages/AccountInfo";
import AdminDashboard from "./pages/AdminDashboard";
import Sidebar from "./components/Sidebar";
import AdminProduct from "./pages/AdminProduct";
import AdminNavbar from "./components/AdminNavbar";
import Admin from "./pages/Admin";
import AdminAddProducts from "./pages/AdminAddProducts";
import AdminCategories from "./pages/AdminCategories";
import AdminOrders from "./pages/AdminOrders";
import AdminCustomers from "./pages/AdminCustomers";
import AdminSettings from "./pages/AdminSettings";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/Sign-in">
            <SignIn />
          </Route>

          <Route path="/Sign-up">
            <SignUp />
          </Route>

          <Route path="/ResetPassword">
            <ResetPassword />
          </Route>

          <Route path="/Email">
            <Email />
          </Route>

          <Route path="/ResetPasswordProcess">
            <ResetPasswordProcess />
          </Route>

          <Route path="/ResetSuccess">
            <ResetSuccess />
          </Route>

          <Route path="/Shop">
            <Shop />
          </Route>

          <Route path="/accountinfo">
            <AccountInfo />
          </Route>
          <Route path="/admindashboard">
            <AdminDashboard />
          </Route>
          <Route path="/sidebar">
            <Sidebar />
          </Route>
          <Route path="/adminproduct">
            <AdminProduct />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/addproduct">
            <AdminAddProducts />
          </Route>
          <Route path="/admincategories">
            <AdminCategories />
          </Route>
          <Route path="/adminorder">
            <AdminOrders />
          </Route>
          <Route path="/admincustomers">
            <AdminCustomers />
          </Route>
          <Route path="/adminsettings">
            <AdminSettings/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
