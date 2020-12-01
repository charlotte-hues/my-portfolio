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

const Circle1 = {
  component: "Circle",
  texture: true,
  layer: "0",
  stripes: {
    invert: true,
    rotation: 45
  },
  width: {
    main: 150,
    start: 2,
    end: 2
  },
  x: {
    main: 50,
    start: 0,
    end: 100
  },
  y: {
    main: 50,
    start: 100,
    end: 0
  }
};

const Work = props => {
  let links = allWork.map(project => {
    if (!props.homepage) {
      return (
        <Link key={project.pathName} to={"/work/" + project.pathName}>
          <ProjectThumb
            patternData={{
              background: "var(--background2)",
              shapes: [
                {
                  ...Circle1,
                  uid: `${project.pathName}Circle1`
                }
              ]
            }}
          >
            {project.title}
          </ProjectThumb>
        </Link>
      );
    }
    if (project.homepage) {
      return (
        <Link key={project.pathName} to={"/work/" + project.pathName}>
          <ProjectThumb
            patternData={{
              background: "var(--background2)",
              shapes: [
                {
                  ...Circle1,
                  uid: `${project.pathName}Circle1`
                }
              ]
            }}
          >
            {project.title}
          </ProjectThumb>
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
            <ProjectThumb
              patternData={{
                background: "var(--background2)",
                shapes: [
                  {
                    ...Circle1,
                    uid: `viewallCircle1`
                  }
                ]
              }}
            >
              View all projects
            </ProjectThumb>
          </Link>
        )}
      </Container>
      {ContactFooter}
    </>
  );
};

export default Work;
