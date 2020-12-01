import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";

import { Stripes, GrainyTexture } from "./Defs";
import ConditionalWrapper from "../../../../hoc/Utility/ConditionalWrapper";

const Container = styled.svg.attrs({
  viewBox: "0 0 280 280",
  preserveAspectRatio: "xMinYMid slice",
  xmlns: "http://www.w3.org/2000/svg"
})`
  height: ${props => (props.height ? props.height : "100%")};
  width: ${props => (props.width ? props.width : "100%")};
  left: ${props => (props.left ? props.left : "0")}%;
  top: ${props => (props.top ? props.top : "0")}%;

  z-index: ${props => (props.layer ? props.layer : "0")};

  display: block;
  position: absolute;
`;

const AnimatedContainer = animated(Container);

const interp = ({ animatedValue, value }) =>
  animatedValue.interpolate({
    extrapolate: "clamp",
    range: [-200, 160, 600],
    output: [value.end, value.main, value.start]
  });

const Circle = ({
  animatedValue,
  width,
  x,
  y,
  layer,
  color,
  texture,
  stripes,
  uid
}) => {
  const interpSize = interp({
    animatedValue: animatedValue.value,
    range: animatedValue.range,
    value: width
  });
  const interpX = interp({
    animatedValue: animatedValue.value,
    range: animatedValue.range,
    value: x
  });
  const interpY = interp({
    animatedValue: animatedValue.value,
    range: animatedValue.range,
    value: y
  });

  return (
    <AnimatedContainer
      width={interpSize}
      height={interpSize}
      layer={layer}
      // position={[interpX, interpY]}
      left={interpX}
      top={interpY}
    >
      {texture && (
        <defs>
          <GrainyTexture />
        </defs>
      )}
      {stripes && <Stripes id={uid} {...stripes} />}
      <ConditionalWrapper
        wrapper={children => <g mask={`url(#${uid}StripeMask)`}>{children}</g>}
        condition={stripes}
      >
        <circle
          cx="140"
          cy="140"
          r="140"
          fill={color ? color : "var(--primary)"}
          mask={texture && "url(#grainy)"}
        />
      </ConditionalWrapper>
      <animated.div>{interpX}</animated.div>
    </AnimatedContainer>
  );
};

export default Circle;
