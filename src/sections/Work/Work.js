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
  overflow: hidden;
  background: var(--background2);

  &:after {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 4px;
    left: 4px;
    background: var(--background2);
  }
`;

const Circle1 = {
  component: "Circle",
  layer: "1",
  color: "var(--primary)",
  texture: 2,
  width: 150,
  x: [100, 50, 0],
  y: [0, 50, 100],
  opacity: [0, 0.5, 0]
};

const Waves = {
  component: "Waves",
  layer: "0",
  color: "var(--primary)",
  texture: 3,
  stripes: true,
  width: "100%",
  height: "100%",
  x: [0, 0, 0],
  y: [0, 0, 0]
};

const Work = props => {
  let links = allWork.map(project => {
    return props.homepage && project.homepage ? null : (
      <StyledLink key={project.pathName} to={"/work/" + project.pathName}>
        <ProjectThumb
          background="var(--background)"
          pattern={[
            {
              ...Circle1,
              uid: `${project.pathName}Circle1`
            },
            {
              ...Waves,
              uid: `${project.pathName}Waves`
            }
          ]}
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
              background="var(--background2)"
              pattern={[
                {
                  ...Circle1,
                  uid: `viewallCircle1`
                }
              ]}
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
