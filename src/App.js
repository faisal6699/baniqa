import React, { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WOW from "wowjs";
import Home from "./component/Home/Home";
import Homes from "./component/Home/Homes";
import LogIn from "./component/LogIn/LogIn";
import AddProduct from "./component/AddProduct/AddProduct";
import Page from "./component/Page/Page";
import Post from "./component/Post/Post";
import OrderHistory from "./component/OrderHistory/OrderHistory";
import PaymentHistory from "./component/PaymentHistory/PaymentHistory";
import AccountSetting from "./component/AccountSetting/AccountSetting";
import Cart from "./component/Cart/Cart";
import MainMessage from "./component/Messaging/MainMessage";
import SignupCreateForm from './component/Signup/signupCreateForm'
import SignupPhoneForm from './component/Signup/signupPhoneForm'

import SideBar from './component/layout/Header/SideBar/SideBar'
import "./App.css";
import BaseRouter from './routes/routes'

import CartContextProvider from "./context/cartContext";
function App() {
  useEffect(() => {
    new WOW.WOW().init();
  });
  

  return (
      <Router>
        <BaseRouter />
      </Router>


      // <Router>
      //   <div className="App">
      //   <CartContextProvider>
      //     <Switch>
      //       <Route exact path="/messages" component={MainMessage} />
      //       <Route exact path="/cart" component={Cart} />
      //       <Route exact path="/signup" component={SignupCreateForm} />
      //       <Route exact path='/signup2' component={SignupPhoneForm} />
            
      //       <Route exact path="/" component={Homes} />
      //       <Route exact path="/homes" component={Homes} />
      //       <Route exact path="/login" component={LogIn} />
      //       <Route exact path="/add-product" component={AddProduct} />
      //       <Route exact path="/page" component={Page} />
      //       <Route exact path="/post">
      //         <Post />
      //       </Route>
      //       <Route exact path="/order-history" component={OrderHistory} />
      //       <Route exact path="/payment-history" component={PaymentHistory} />
      //       <Route exact path="/account-setting" component={AccountSetting} />
      //     </Switch>

      //     </CartContextProvider>
      //   </div>
      // </Router>
    
  );
}

export default App;
