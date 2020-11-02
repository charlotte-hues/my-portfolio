import React from "react";
import { Link } from "react-router-dom";

import allWork from "./allWork";

const Work = props => {
  let links = allWork.map(project => {
    if (!props.homepage) {
      return (
        <Link key={project.pathName} to={"/work/" + project.pathName}>
          {project.title}
        </Link>
      );
    }
    if (project.homepage) {
      return (
        <Link key={project.pathName} to={"/work/" + project.pathName}>
          {project.title}
        </Link>
      );
    } else {
      return null;
    }
  });

  return (
    <>
      {links}
      <Link to="/work">View all projects</Link>
    </>
  );
};

export default Work;
