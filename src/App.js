import React from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import Layout from "./hoc/Layout/Layout";
import Home from "./sections/Home/Home";
import Work from "./sections/Work/Work";
import Project from "./sections/Project/Project";

const App = () => {
  let routes = (
    <Switch>
      <Route path="/work/:project" component={Project} />
      <Route path="/work" component={Work} />
      <Route path="/about" exact component={Home} />
      <Route path="/contact" exact component={Home} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
};

export default withRouter(App);
