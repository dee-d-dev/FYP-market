import "./App.css";
import GlobalFonts from './fonts/fonts'
import GlobalStyles from './GlobalStyles'
// import Home from "./pages/Home/Home"
import SignIn from "./pages/Sign-in/Sign-in"
import SignUp from "./pages/Sign-up/Sign-up"
import ShopProduct from './pages/ShopProduct/ShopProduct'
import Thank from './pages/Thank/Thank'
import Check from './pages/CheckOut/CheckOut'
import Cart from './pages/Cart/Cart'
// import AccountInfo from './pages/AccountInfo/AccontInfo'
import ResetPassword from "./pages/ResetPassword/ResetPassword"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router basename = {process.env.PUBLIC_URL}>
        <GlobalFonts/>
        <GlobalStyles/>
        <Switch>
          <Route path="/check">
            <Check />
          </Route>

          <Route path="/" exact>
            <Cart />
          </Route>
          
          <Route path="/thank" >
            <Thank />
          </Route>

           <Route path="/Sign-in">
            <SignIn />design course
          </Route>

          <Route path="/Sign-up">
            <SignUp />
          </Route>

          <Route path="/ResetPassword">
            <ResetPassword />
          </Route>

          <Route path="/Shop">
            <ShopProduct />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
