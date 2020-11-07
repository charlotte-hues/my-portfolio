import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import allWork from "./allWork";
import Contact from "../Contact/Contact";

// TODO - DELETE THIS CONTAINER

const Container = styled.div`
  width: 100%;
  height: 600px;
  color: red;
  margin: 10px 0;
`;

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

  const ContactFooter = !props.homepage ? <Contact /> : null;

  return (
    <>
      <Container>
        {links}
        <Link to="/work">View all projects</Link>
      </Container>
      {ContactFooter}
    </>
  );
};

export default Work;
