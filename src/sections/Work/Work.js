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

const patternData1 = {
  stretch: [
    {
      component: "background",
      uid: "hsabdck",
      data: {
        color: "var(--background3)"
      }
    },
    {
      component: "waves",
      uid: "beufvauds",
      data: {
        color: "var(--primary)",
        stripes: true,
        texture: true
      }
    }
  ],
  fixed: [
    {
      component: "circle",
      uid: "cjshdjsdc",
      data: {
        color: "var(--primary)",
        texture: true,
        stripes: {
          invert: false,
          rotation: "0",
          opacity: "0.7",
          width: "6",
          gap: "4px"
        }
      }
    }
  ]
};

const patternData2 = {
  stretch: [
    {
      component: "background",
      uid: "hsabvdck",
      data: {
        color: "var(--background3)"
      }
    },
    {
      component: "waves",
      uid: "beufvauds",
      data: {
        color: "var(--primary)",
        stripes: true,
        texture: true
      }
    }
  ],
  fixed: [
    {
      component: "circle",
      uid: "kkksjsj",
      data: {
        color: "var(--background)",
        texture: true,
        x: "100%",
        y: "100%",
        size: "200",

        stripes: {
          invert: true,
          rotation: "45",
          opacity: "0.7",
          width: "6",
          gap: "4px"
        }
      }
    }
  ]
};

const Work = props => {
  let links = allWork.map(project => {
    if (!props.homepage) {
      return (
        <Link key={project.pathName} to={"/work/" + project.pathName}>
          <ProjectThumb patternData={patternData2}>
            {project.title}
          </ProjectThumb>
        </Link>
      );
    }
    if (project.homepage) {
      return (
        <Link key={project.pathName} to={"/work/" + project.pathName}>
          <ProjectThumb patternData={patternData2}>
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
            <ProjectThumb patternData={patternData2}>
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
