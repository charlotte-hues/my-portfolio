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
  layer: "0",
  color: "var(--primary)",
  texture: true,
  stripes: {
    invert: true,
    rotation: 45
  },
  width: {
    main: 150,
    start: 2,
    end: 40
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

const Circle2 = {
  component: "Waves",
  layer: "0",
  color: "var(--background4)",
  texture: true,
  stripes: false,
  width: {
    main: 100,
    start: 200,
    end: 200
  },
  x: {
    main: 40,
    start: 2,
    end: 2
  },
  y: {
    main: 20,
    start: 70,
    end: 0
  }
};

const Work = props => {
  let links = allWork.map(project => {
    return props.homepage && project.homepage ? null : (
      <Link key={project.pathName} to={"/work/" + project.pathName}>
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
      </Link>
    );
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
