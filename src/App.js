import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/Sign-in";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/signIn">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
