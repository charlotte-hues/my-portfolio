import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";

import allWork from "../Work/allWork";

const Project = props => {
  let currentProject = allWork.find(
    project => project.pathName === props.match.params.project
  );

  const routes = allWork.map(project => (
    <Route
      key={project.pathName}
      path={"/work/" + project.pathName}
      component={project.component}
    />
  ));

  const projects = (
    <Switch>
      {routes}
      <Redirect to="/work" />
    </Switch>
  );

  return (
    <>
      <h1>{currentProject.title}</h1>
      <p>Year: {currentProject.year}</p>
      {projects}
      <Link to="/work">View all projects</Link>
    </>
  );
};

export default Project;
