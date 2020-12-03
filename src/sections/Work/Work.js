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

const StyledLink = styled(Link)`
  margin: 20px 0;
`;

const Circle1 = {
  component: "Circle",
  layer: "0",
  color: "var(--background)",
  texture: true,
  stripes: {
    invert: true,
    rotation: 45
  },
  width: {
    start: 40,
    mid: 150,
    end: 2
  },
  x: {
    start: 100,
    mid: 50,
    end: 0
  },
  y: {
    start: 0,
    mid: 50,
    end: 100
  }
};

const Circle2 = {
  component: "Waves",
  layer: "0",
  color: "var(--background4)",
  texture: true,
  stripes: true,
  width: {
    start: 200,
    mid: 100,
    end: 200
  },
  x: {
    start: 2,
    mid: 40,
    end: 2
  },
  y: {
    start: 0,
    mid: 20,
    end: 70
  }
};

const Work = props => {
  let links = allWork.map(project => {
    return props.homepage && project.homepage ? null : (
      <StyledLink key={project.pathName} to={"/work/" + project.pathName}>
        <ProjectThumb
          patternData={{
            background: "var(--background2)",
            shapes: [
              {
                ...Circle1,
                uid: `${project.pathName}Circle1`
              },
              {
                ...Circle2,
                uid: `${project.pathName}Circle2`
              }
            ]
          }}
        >
          {project.title}
        </ProjectThumb>
      </StyledLink>
    );
  });

  const ContactFooter = !props.homepage ? <Contact /> : null;

  return (
    <>
      <Container>
        {links}
        {props.homepage && (
          <StyledLink to="/work">
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
          </StyledLink>
        )}
      </Container>
      {ContactFooter}
    </>
  );
};

export default Work;
