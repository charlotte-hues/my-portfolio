import React, { useRef, useCallback, useEffect } from "react";
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
  width: auto
  height: 160px;
  
  color: var(--background4);
  justify-text: top;
  text-align: left;
  margin: 20px;
  z-index: 100;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 160px;
    height: 160px;
    background: var(--background);
    border-radius: 100%;
    content: "";
    z-index: -10;
  }


  & h3 {
    position: relative;
    margin: 0;
    font-size: 3rem;
    letter-spacing: 2px;
    line-height: 2.8rem;

    -webkit-text-stroke-width: 1px;
	  -moz-text-stroke-width: 1px;  
    -webkit-text-stroke-color: var(--primary);
	  -moz-text-stroke-color: var(--primary);
  
    color: transparent;

    &:after {
      width: 100%;
      height: 100%;
      position: absolute;
      -webkit-text-stroke-width: 0px;
      -moz-text-stroke-width: 0px;
      font-size: 3rem;
      letter-spacing: 2px;
      line-height: 2.8rem;
      left: calc(50% + 6px);
      top: calc(50% + 6px);
      content: "${props => props.content}";
      z-index: -1;
      position: absolute;
      transform: translate(-50%, -50%);

      background-color: var(--background4);

      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;

      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }
  }
`;

const AnimatedThumbTitle = animated(ThumbTitle);

const ProjectThumb = ({ patternData, children }) => {
  console.log(patternData);
  const thumbRef = useRef();
  const [{ top }, set] = useSpring(() => ({
    from: { o: 0, color: "red", test: 0, top: 0 },
    o: 1,
    color: "green",
    test: 22,
    top: 0
  }));

  const onScroll = useCallback(() => {
    set({ top: thumbRef.current.getBoundingClientRect().top });
  }, [set]);

  useEffect(() => {
    const main = document.getElementById("MainContent");
    main.addEventListener("scroll", onScroll);

    return () => {
      main.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  useEffect(() => {
    if (thumbRef.current !== undefined) {
      set({ top: thumbRef.current.getBoundingClientRect().top });
    }
  }, [thumbRef, set]);

  console.log(children);

  return (
    <Container backgroundColor={patternData.background} ref={thumbRef}>
      <Patterns
        patternData={patternData.shapes}
        animatedValue={{ value: top, range: [-200, 160, 600] }}
      />
      <ThumbTitle content={children}>
        {/* {top.interpolate(x => x.toFixed(0))} */}
        {/* {test.interpolate(x => x.toFixed(0))} */}
        {/* {color.interpolate(x => x)} */}
        <h3>{children}</h3>
      </ThumbTitle>
    </Container>
  );
};

export default ProjectThumb;
