import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Layout from "./hoc/Layout/Layout";
import Home from "./sections/Home/Home";
import Work from "./sections/Work/Work";
import Project from "./sections/Project/Project";

const App = () => {
  let routes = (
    <Switch>
      <Route path="/work" exact component={Work} />
      <Route path="/work/:project" component={Project} />
      <Route path="/" component={Home} />
    </Switch>
  );

  return (
    <>
      <Layout>{routes}</Layout>
    </>
  );
};

export default withRouter(App);
