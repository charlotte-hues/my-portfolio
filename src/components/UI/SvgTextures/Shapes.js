import React from "react";
import styled from "styled-components";

import { Stripes, Gradient, GrainyTexture } from "./Defs/Defs";

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
  preserveAspectRatio: "slice"
})`
  // margin: auto;
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  bottom: 0;
  z-index: -10;
`;

const Waves = props => {
  return (
    <>
      <defs>
        <mask
          id="waveMask"
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
        >
          <path
            d="M272.3 150.584L280 146.819V280.5H0V146.819H7.70001C15.6333 146.819 31.0333 146.819 46.6667 143.054C62.3 139.289 77.7 131.759 93.3333 137.406C108.967 143.054 124.367 161.879 140 158.114C155.633 154.349 171.033 127.994 186.667 126.111C202.3 124.228 217.7 146.819 233.333 154.349C248.967 161.879 264.367 154.349 272.3 150.584Z"
            fill="url(#gradient)"
          />
          <path
            d="M7.7 238.584L0 234.819V280H280V234.819H272.3C264.367 234.819 248.967 234.819 233.333 231.054C217.7 227.289 202.3 219.759 186.667 225.406C171.033 231.054 155.633 249.879 140 246.114C124.367 242.349 108.967 215.994 93.3333 214.111C77.7 212.228 62.3 234.819 46.6667 242.349C31.0333 249.879 15.6333 242.349 7.7 238.584Z"
            fill="url(#gradient)"
          />
          {props.stripes && (
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#stripePattern)"
            />
          )}
        </mask>
      </defs>
      <g mask="url(#waveMask)">
        <rect
          mask={props.texture && "url(#grainy)"}
          fill={props.color ? props.color : "#074FA9"}
          width="100%"
          height="100%"
        />
      </g>
    </>
  );
};

const Circle = props => {
  return (
    <>
      <defs>
        <Stripes
          id="circleStripes"
          width={props.stripes.width}
          gap={props.stripes.gap}
          opacity={props.stripes.opacity}
          rotation={props.stripes.rotation}
        />
        <mask
          id="circleMask"
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
        >
          <circle
            cx={props.x ? props.x : "140"}
            cy={props.y ? props.y : "140"}
            r={props.size ? props.size : "70"}
            fill={`rgba(255,255,255,${props.opacity ? props.opacity : "1"})`}
          />
          {props.stripes && (
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#circleStripes)"
            />
          )}
        </mask>
      </defs>
      <g mask="url(#circleMask)">
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={props.color ? props.color : "var(--background3)"}
          mask={props.texture && "url(#grainy)"}
        />
      </g>
    </>
  );
};

const Shapes = props => {
  let background = props.background ? (
    <rect x="0" y="0" width="100%" height="100%" fill={props.background} />
  ) : null;

  let waves = props.waves ? (
    <Waves
      color={props.waves.color}
      texture={props.waves.texture}
      stripes={props.waves.stripes}
    />
  ) : null;

  let circle = props.circle ? (
    <Circle
      color={props.circle.color}
      texture={props.circle.texture}
      stripes={props.circle.stripes}
    />
  ) : null;

  return (
    <>
      <StretchSVG vb={viewBox}>
        <defs>
          <Gradient />
          <Stripes />
          <GrainyTexture />
        </defs>
        {background}
        {waves}
      </StretchSVG>
      <StaticSVG>{circle}</StaticSVG>
    </>
  );
};

export default Shapes;
