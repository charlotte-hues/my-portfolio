import React, { useRef, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring } from "react-spring";

import Patterns from "../../components/UI/Patterns/Patterns";

const Container = styled.div`
  position: relative;
  height: 250px;
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
  // z-index: 100;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 160px;
    height: 160px;
    background: var(--background2);
    border-radius: 100%;
    content: "";
  }


  & h3 {
    position: relative;
    margin: 0;
    height: 160px;
    font-size: 2rem;
    letter-spacing: 3px;
    line-height: 2.8rem;
    z-index: 2;

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
      font-size: 2rem;
      letter-spacing: 3px;
      line-height: 2.8rem;
      left: calc(50% + 4px);
      top: calc(50% + 4px);
      content: "${props => props.content}";
      z-index: -1;
      transform: translate(-50%, -50%);

      background-color: var(--background);
      // opacity: 0.3;

      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;

      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }
  }
`;

const ProjectThumb = ({ patternData, children }) => {
  const thumbRef = useRef();
  const [{ top }, set] = useSpring(() => ({ top: 0 }));
  const [range, setRange] = useState([-200, 600]);

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
      let height = thumbRef.current.getBoundingClientRect().height;
      setRange([0 - height / 2, window.innerHeight]);
      set({ top: thumbRef.current.getBoundingClientRect().top });
    }
  }, [thumbRef, set]);

  return (
    <Container backgroundColor={patternData.background} ref={thumbRef}>
      <Patterns
        patternData={patternData.shapes}
        animatedValue={{ value: top, range: range }}
      />
      <ThumbTitle content={children}>
        <h3>{children}</h3>
      </ThumbTitle>
    </Container>
  );
};

export default ProjectThumb;
