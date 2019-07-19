import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome";
//import Home from '././components/Home';
//import Login from '././components/Login';
//import Signup from '././components/Signup';
import NotFound from "./components/NotFound";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
