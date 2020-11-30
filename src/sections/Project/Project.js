import React, { lazy } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";

import allWork from "../Work/allWork";

const importProject = projectName =>
  lazy(() =>
    import(`../../projects/pages/${projectName}`).catch(() =>
      import(`../../projects/pages/NullProject`)
    )
  );

const Project = props => {
  let currentProject = allWork.find(
    project => project.pathName === props.match.params.project
  );

  const routes = allWork.map(project => {
    const Component = importProject(project.component);
    return (
      <Route
        key={project.pathName}
        path={"/work/" + project.pathName}
        component={Component}
      />
    );
  });

  const projects = (
    <Switch>
      {routes}
      <Redirect to="/work" />
    </Switch>
  );

  return (
    <React.Suspense fallback="loading...">
      <h1>{currentProject.title}</h1>
      <p>Year: {currentProject.year}</p>
      {projects}
      <Link to="/work">View all projects</Link>
    </React.Suspense>
  );
};

export default Project;
