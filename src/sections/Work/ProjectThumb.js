import React from "react";
import styled from "styled-components";

import Shapes from "../../components/UI/SvgTextures/Shapes";

const Container = styled.div`
  position: relative;
  height: 250px;
  margin: 20px 0;
`;

const waves = {
  color: "var(--primary)",
  texture: true,
  stripes: true
};

const circle = {
  color: "var(--background)",
  texture: true,
  stripes: {
    width: 10,
    gap: 1,
    opacity: 0.8,
    rotation: 45
  }
};

const ProjectThumb = props => {
  return (
    <Container>
      <h3>{props.children}</h3>
      <Shapes background="var(--background2)" waves={waves} circle={circle} />
    </Container>
  );
};

export default ProjectThumb;
