import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainMessage from "../component/Messaging/MainMessage";
import Cart from "../component/Cart/Cart";
import AddProduct from "../component/AddProduct/AddProduct";
import OrderHistory from "../component/OrderHistory/OrderHistory";
import PaymentHistory from "../component/PaymentHistory/PaymentHistory";
import AccountSetting from "../component/AccountSetting/AccountSetting";

const DashboardRoute = () => {
  return (
    <Switch>
      <Route exact path="/messages" component={MainMessage} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/add-product" component={AddProduct} />
      <Route exact path="/order-history" component={OrderHistory} />
      <Route exact path="/payment-history" component={PaymentHistory} />
      <Route exact path="/account-setting" component={AccountSetting} />
    </Switch>
  );
};

export default DashboardRoute;
