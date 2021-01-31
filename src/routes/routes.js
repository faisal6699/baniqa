import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homes from "../component/Home/Homes";
import LogIn from "../component/LogIn/LogIn";
import SignupCreateForm from "../component/Signup/signupCreateForm";
import SignupPhoneForm from "../component/Signup/signupPhoneForm";
import Page from "../component/Page/Page";
import Post from "../component/Post/Post";
import AdminProtected from "../routes/adminprotectedRoute";
import DashboardRoute from "../routes/dashboardRoute";
import NotFound from "../routes/notFound";

const BaseRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homes} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignupCreateForm} />
        <Route exact path="/signup2" component={SignupPhoneForm} />
        <Route exact path="/page" component={Page} />
        <Route exact path="/post" component={Post} />
        <AdminProtected component={DashboardRoute} />
        <Route path="/notFound" component={NotFound} />

        <Route path="*">
          <Redirect to="/notFound" />
        </Route>
      </Switch>
    </div>
  );
};

export default BaseRouter;
