import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./containers/App";
import Login from "./containers/Login";
import Register from "./containers/Register";
import ConfirmAddr from "./components/ConfirmAddr";
import ForgotPassword from "./containers/ForgotPassword";
import ResetPassword from "./containers/ResetPassword";
import UserProfile from "./containers/UserProfile";
import NotFound from "./containers/NotFound";
import Messages from "./components/messages";
import Search from "./containers/Search";
import ContactUs from "./containers/ContactUs";
import AboutUs from "./containers/AboutUs";
import Help from "./containers/Help";
import Faq from "./containers/Faq";
export default function MainRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/users/login" component={Login} />
          <Route exact path="/users/register" component={Register} />
          <Route path="/users/register/:key" component={ConfirmAddr} />
          <Route path="/users/forgot-password" component={ForgotPassword} />
          <Route path="/users/reset-password/:key" component={ResetPassword} />
          <Route path="/users/profile/:username" component={UserProfile} />
          <Route path="/chat/messages" component={Messages} />
          <Route path="/main/search" component={Search} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Help" component={Help} />
          <Route path="/FAQ" component={Faq} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
