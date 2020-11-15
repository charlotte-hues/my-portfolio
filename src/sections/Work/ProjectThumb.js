import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 150px;
  margin: 20px 0;
  background-color: var(--background2);
`;

const Circle = styled.div`
  height: 100px;
  width: 100px;
  text-align: center;
  background-color: var(--background);
  color: var(--primary);
  border-radius: 100%;
`;

const ProjectThumb = props => {
  return (
    <Container>
      <Circle>{props.children}</Circle>
    </Container>
  );
};

export default ProjectThumb;
