import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import allWork from "./allWork";
import Contact from "../Contact/Contact";
import ProjectThumb from "./ProjectThumb";

// TODO - DELETE THIS CONTAINER

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  color: red;
  margin: 10px 0;
`;

const Work = props => {
  let links = allWork.map(project => {
    if (!props.homepage) {
      return (
        <Link key={project.pathName} to={"/work/" + project.pathName}>
          <ProjectThumb>{project.title}</ProjectThumb>
        </Link>
      );
    }
    if (project.homepage) {
      return (
        <Link key={project.pathName} to={"/work/" + project.pathName}>
          <ProjectThumb color={project.color}>{project.title}</ProjectThumb>
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
        {props.homepage && (
          <Link to="/work">
            <ProjectThumb>View all projects</ProjectThumb>
          </Link>
        )}
      </Container>
      {ContactFooter}
    </>
  );
};

export default Work;
