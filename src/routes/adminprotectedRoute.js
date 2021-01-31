import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import * as Auth from "../helpers/auth";

const AdminProtected = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Auth.validAdmin() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )
    }
  />
);

export default AdminProtected;
