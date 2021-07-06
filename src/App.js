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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
