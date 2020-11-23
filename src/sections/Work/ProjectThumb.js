import React from "react";
import styled from "styled-components";

import Patterns from "../../components/UI/Patterns/Patterns";

const Container = styled.div`
  position: relative;
  height: 250px;
  margin: 20px 0;
`;

// const circle = {
//   stripes: {
//     width: 10,
//     gap: 1,
//     opacity: 0.8,
//     rotation: 45
//   }
// };

const patternData = {
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
  static: [
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

const ProjectThumb = props => {
  return (
    <Container>
      <h3>{props.children}</h3>
      <Patterns shapes={patternData} />
    </Container>
  );
};

export default ProjectThumb;
