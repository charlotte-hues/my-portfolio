import React from "react";
import styled from "styled-components";

import { Gradient, GrainyTexture } from "./Shapes/Defs";
import Shapes from "./Shapes/Shapes";

const viewBox = "0 0 280 280";

const StretchSVG = styled.svg.attrs({
  viewBox: viewBox,
  preserveAspectRatio: "none"
})`
  margin: auto;
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  bottom: 0;
  z-index: -10;
`;

const StaticSVG = styled.svg.attrs({
  viewBox: viewBox,
  preserveAspectRatio: "xMinYMid slice"
})`
  // margin: auto;
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  bottom: 0;
  z-index: -10;
`;

const Patterns = props => {
  return (
    <>
      <StretchSVG vb={viewBox}>
        <defs>
          <Gradient />
          <GrainyTexture />
        </defs>
        {props.shapes.stretch.map(shape => Shapes(shape))}
      </StretchSVG>
      <StaticSVG>{props.shapes.static.map(shape => Shapes(shape))}</StaticSVG>
    </>
  );
};

export default Patterns;
