import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

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

const AnimatedThumbTitle = animated(ThumbTitle);

const ProjectThumb = ({ patternData, children }) => {
  const [{ o, color, test }, set] = useSpring(() => ({
    from: { o: 0, color: "red", test: 0 },
    o: 1,
    color: "green",
    test: 22
  }));

  const onMove = e => {
    set({ test: e.clientX });
  };

  return (
    <Container backgroundColor={patternData.background} onMouseMove={onMove}>
      <Patterns patternData={patternData.shapes} />
      <AnimatedThumbTitle
        style={{
          color,
          opacity: o.interpolate([0.1, 0.2, 0.6, 1], [1, 0.1, 0.5, 1])
        }}
      >
        {/* {test.interpolate(x => x.toFixed(0))} */}
        {color.interpolate(x => x)}
        {/* <animated.h3>{children}</animated.h3> */}
      </AnimatedThumbTitle>
    </Container>
  );
};

export default ProjectThumb;
