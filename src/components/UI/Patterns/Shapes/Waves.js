import React from "react";
import styled, { keyframes, css } from "styled-components";

import { Stripes, Gradient, Texture } from "./Defs";
import ConditionalWrapper from "../../../../hoc/Utility/ConditionalWrapper";

const wave1Paths = [
  "M0 240L9.33333 235C18.6667 230 37.3333 220 56 220C74.6667 220 93.3333 230 112 240C130.667 250 149.333 260 168 255C186.667 250 205.333 230 224 223.344C242.667 216.562 261.333 223.438 270.667 226.656L280 230V280H270.667C261.333 280 242.667 280 224 280C205.333 280 186.667 280 168 280C149.333 280 130.667 280 112 280C93.3333 280 74.6667 280 56 280C37.3333 280 18.6667 280 9.33333 280H0V240Z",
  "M0 210L9.33333 218.344C18.6667 226.562 37.3333 243.438 56 246.656C74.6667 250 93.3333 240 112 230C130.667 220 149.333 210 168 215C186.667 220 205.333 240 224 241.656C242.667 243.438 261.333 226.562 270.667 218.344L280 210V280H270.667C261.333 280 242.667 280 224 280C205.333 280 186.667 280 168 280C149.333 280 130.667 280 112 280C93.3333 280 74.6667 280 56 280C37.3333 280 18.6667 280 9.33333 280H0V210Z"
];

const animationSpeed = css`
  animation-duration: 1.6s;
  animation-iteration-count: infinite;
  // animation-direction: alternate;
`;

const Wave1Anim = keyframes`
0%, 100%{
  d: path(${wave1Paths[0]});
}
  50%  {
    d: path(${wave1Paths[1]});
}
`;

const Wave1 = styled.path`
${animationSpeed}
  animation-name: ${Wave1Anim})
`;

const Waves = ({
  animatedValue,
  width,
  height,
  x,
  y,
  layer,
  color,
  texture,
  stripes,
  uid
}) => {
  return (
    <div
      style={{
        position: "absolute",

        left: x,
        bottom: y,
        width: width,
        height: height,
        zIndex: layer
      }}
    >
      <svg
        viewBox="0 0 280 280"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        margin="auto"
        position="absolute"
        display="block"
        bottom="0"
        width="100%"
        height="100%"
      >
        <defs>
          <Gradient />
          {texture && <Texture id={uid} style={texture} />}
          {stripes && <Stripes id={uid} {...stripes} />}
          <mask
            id="waveMask"
            maskUnits="userSpaceOnUse"
            maskContentUnits="userSpaceOnUse"
          >
            <ConditionalWrapper
              wrapper={children => (
                <g mask={`url(#${uid}StripeMask)`}>{children}</g>
              )}
              condition={stripes}
            >
              <Wave1 d={wave1Paths[0]} fill="url(#gradient)" />
              <path
                d="M7.7 238.584L0 234.819V280H280V234.819H272.3C264.367 234.819 248.967 234.819 233.333 231.054C217.7 227.289 202.3 219.759 186.667 225.406C171.033 231.054 155.633 249.879 140 246.114C124.367 242.349 108.967 215.994 93.3333 214.111C77.7 212.228 62.3 234.819 46.6667 242.349C31.0333 249.879 15.6333 242.349 7.7 238.584Z"
                fill="url(#gradient)"
              />
            </ConditionalWrapper>
          </mask>
        </defs>

        <g mask="url(#waveMask)">
          <rect
            mask={texture && `url(#${uid}texture)`}
            fill={color ? color : "var(--primary)"}
            width="100%"
            height="100%"
          />
        </g>
      </svg>
    </div>
  );
};

export default Waves;
