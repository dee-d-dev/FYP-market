import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/Sign-in";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/Sign-up";
import ResetPassword from "./pages/ResetPassword";


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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
