import React from "react";
import styled from "styled-components";

import Patterns from "../../components/UI/Patterns/Patterns";

const Container = styled.div`
  position: relative;
  height: 250px;
  margin: 20px 0;
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : "none"};
`;

const ThumbTitle = styled.div`
  position: absolute;
  top: 10%;
  width: 160px;
  height: 160px;
  border-radius: 100%;
  color: var(--primary);
  background: var(--background);
  justify-content: center;
  margin: 20px;
`;

const ProjectThumb = ({ patternData, children }) => {
  return (
    <Container backgroundColor={patternData.background}>
      <Patterns patternData={patternData.shapes} />
      <ThumbTitle>
        <h3>{children}</h3>
      </ThumbTitle>
    </Container>
  );
};

export default ProjectThumb;
