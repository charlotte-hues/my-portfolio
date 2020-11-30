import React from "react";
import styled from "styled-components";

import { Stripes, GrainyTexture } from "./Defs";
import ConditionalWrapper from "../../../../hoc/Utility/ConditionalWrapper";

const Container = styled.svg.attrs({
  viewBox: "0 0 280 280",
  preserveAspectRatio: "xMinYMid slice",
  xmlns: "http://www.w3.org/2000/svg"
})`
  display: block;
  height: ${props => (props.height ? props.height : "100%")};
  width: ${props => (props.width ? props.width : "100%")};
  z-index: ${props => (props.layer ? props.layer : "0")};
  position: absolute;
  left: ${props => (props.position ? props.position[0] : "0")};
  top: ${props => (props.position ? props.position[1] : "0")};
`;

const Circle = ({ width, layer, color, texture, stripes, uid, position }) => {
  return (
    <Container width={width} height={width} layer={layer} position={position}>
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
    </Container>
  );
};

export default Circle;
