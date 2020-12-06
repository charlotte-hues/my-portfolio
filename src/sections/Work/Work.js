import React, { useEffect } from "react";
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
  layer: "1",
  color: "var(--primary)",
  texture: 2,
  width: 150,
  x: [100, 50, 0],
  y: [0, 50, 100],
  opacity: [0, 0.5, 0]
};

const Circle2 = {
  component: "Circle",
  layer: "1",
  color: "var(--primary)",
  stripes: true,
  texture: 1,
  width: [50, 150, 60],
  x: [0, 50, 0],
  y: [0, 50, 100],
  opacity: [0, 0.5, 0]
};

const Circle3 = {
  component: "Circle",
  layer: "3",
  color: "var(--background3)",
  texture: 3,
  width: "100%",
  x: 30,
  y: 0,
  opacity: 1
};

// const Circle4 = {
//   component: "Circle",
//   layer: "4",
//   color: "var(--background)",
//   width: "160px",
//   x: 30,
//   y: 20,
//   opacity: 1
// };

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

const Work = ({ homepage }) => {
  useEffect(() => {
    if (!homepage) {
      const main = document.getElementById("MainContent");
      main.scrollTo(0, 0);
    }
  }, [homepage]);

  let links = allWork.map(project => {
    return homepage && project.homepage ? null : (
      <ProjectThumb
        link={"/work/" + project.pathName}
        key={project.pathName}
        background="var(--background)"
        pattern={[
          {
            ...Circle1,
            uid: `${project.pathName}Circle1`
          },
          {
            ...Circle2,
            uid: `${project.pathName}Circle2`
          },
          {
            ...Circle3,
            uid: `${project.pathName}Circle3`
          },
          {
            ...Waves,
            uid: `${project.pathName}Waves`
          }
          // {
          //   ...Circle4,
          //   uid: `${project.pathName}Circle4`
          // }
        ]}
      >
        {project.title}
      </ProjectThumb>
    );
  });

  const ContactFooter = !homepage ? <Contact /> : null;

  return (
    <>
      <Container>
        {links}
        {homepage && (
          <ProjectThumb
            link={"/work"}
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
        )}
      </Container>
      {ContactFooter}
    </>
  );
};

export default Work;
