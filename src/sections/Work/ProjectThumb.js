import React, { useRef, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

import Patterns from "../../components/UI/Patterns/Patterns";
import useEventListener from "../../hooks/useEventListener";
import checkElementIsInRange from "../../hoc/Utility/checkElementIsInRange";
import { clampedInterpolation as interp } from "../../components/UI/Animations/clampedInterpolation";

const StyledLink = styled(Link)`
  margin: 20px 0;
  overflow: hidden;
`;

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
  position: relative; 
`;

const StyledH3 = styled.h3`
margin: 0;
height: 160px;
font-size: 2rem;
letter-spacing: 3px;
line-height: 2.8rem;
z-index: 100;

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
  line-height: 2.8rem;
  left: calc(50% + 4px);
  top: calc(50% + 4px);
  content: "${props => props.content}";
  z-index: -1;
  transform: translate(-50%, -50%); 
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  font-size: 2rem;
  letter-spacing: 3px;
  background-color: var(--background3);
}
`;

const AnimatedTitle = animated(StyledH3);

const ProjectThumb = ({ pattern, background, link, children }) => {
  const thumbRef = useRef();
  const [{ top }, setSpring] = useSpring(() => ({ top: 0 }));
  const [range, setRange] = useState([-200, 600]);
  const animatedValue = { value: top, range: range };

  useEffect(() => {
    if (thumbRef.current !== undefined) {
      let height = thumbRef.current.getBoundingClientRect().height;
      setRange([0 - height / 2, window.innerHeight]);
    }
  }, [thumbRef, setSpring]);

  const onScroll = useCallback(() => {
    checkElementIsInRange(thumbRef, range) &&
      setSpring({ top: thumbRef.current.getBoundingClientRect().top });
  }, [thumbRef, setSpring, range]);

  const main = document.getElementById("MainContent");
  useEventListener("scroll", onScroll, main);

  const interpOpacity = interp(animatedValue, [0.5, 1, 1, 0]);

  return (
    <StyledLink to={link} ref={thumbRef}>
      <Container backgroundColor={background}>
        <Patterns patternData={pattern} animatedValue={animatedValue} />
        <ThumbTitle>
          <AnimatedTitle content={children} style={{ opacity: interpOpacity }}>
            {children}
          </AnimatedTitle>
        </ThumbTitle>
      </Container>
    </StyledLink>
  );
};

export default ProjectThumb;
