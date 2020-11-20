import React from "react";
import styled from "styled-components";

import Defs from "../../components/UI/SvgTextures/defs";

const Container = styled.div`
  position: relative;
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

const Texture = styled.svg`
  margin: auto;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
`;

const ProjectThumb = props => {
  return (
    <Container>
      <Circle>{props.children}</Circle>
      <Defs>
        {/* <g>
          <rect fill="#C9A3B9" width="100%" height="100%" />
        </g> */}
      </Defs>
      <Texture preserveAspectRatio="none" viewBox="0 0 280 280">
        {/* <rect fill="#E7B3BE" width="100%" height="100%" /> */}
        <g mask="url(#mask)">
          <rect fill="#C9A3B9" width="100%" height="100%" />
        </g>
      </Texture>
    </Container>
  );
};

export default ProjectThumb;
