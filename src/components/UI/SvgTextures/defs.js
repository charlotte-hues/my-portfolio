import React from "react";
import styled from "styled-components";

const SvgDefs = styled.svg.attrs({ viewBox: "0 0 280 280" })`
  margin: auto;
  width: 100%;
  height: 100%;
  position: absolute;
`;

let stops = [];
for (let i = 1; i < 10; i++) {
  stops.push(
    <stop offset={`${i * 10}%`} stopColor={`255,255,255,${1 - i / 10}`} />
  );
}

const Gradient = (
  <linearGradient id="gr-1" gradientTransform="rotate(90)">
    {stops.reduce(
      (acc, x) =>
        acc === null ? (
          x
        ) : (
          <>
            {acc} | {x}
          </>
        ),
      null
    )}
    {/* <stop offset="10%" stopColor="white" stopOpacity="1" />
    <stop offset="20%" stopOpacity="0.9" />
    <stop offset="30%" stopOpacity="0.8" />
    <stop offset="40%" stopOpacity="0.7" />
    <stop offset="50%" stopOpacity="0.6" />
    <stop offset="60%" stopOpacity="0.5" />
    <stop offset="70%" stopOpacity="0.4" />
    <stop offset="80%" stopOpacity="0.3" />
    <stop offset="90%" stopOpacity="0.2" />
    <stop offset="100%" stopColor="white" stopOpacity="0.1" /> */}
  </linearGradient>
);

const Stripes = (
  <pattern id="stripes" width="6" height="1" patternUnits="userSpaceOnUse">
    <line stroke="rgba(0,0,0,0.7)" strokeWidth="4px" y2="20" />
  </pattern>
);

const StripeyWaves = (
  <mask id="mask" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
    <path
      d="M272.3 150.584L280 146.819V280.5H0V146.819H7.70001C15.6333 146.819 31.0333 146.819 46.6667 143.054C62.3 139.289 77.7 131.759 93.3333 137.406C108.967 143.054 124.367 161.879 140 158.114C155.633 154.349 171.033 127.994 186.667 126.111C202.3 124.228 217.7 146.819 233.333 154.349C248.967 161.879 264.367 154.349 272.3 150.584Z"
      fill="url(#gr-1)"
    />
    <path
      d="M7.7 238.584L0 234.819V280H280V234.819H272.3C264.367 234.819 248.967 234.819 233.333 231.054C217.7 227.289 202.3 219.759 186.667 225.406C171.033 231.054 155.633 249.879 140 246.114C124.367 242.349 108.967 215.994 93.3333 214.111C77.7 212.228 62.3 234.819 46.6667 242.349C31.0333 249.879 15.6333 242.349 7.7 238.584Z"
      fill="url(#gr-1)"
    />
    <rect x="0" y="0" width="100%" height="100%" fill="url(#stripes)" />
  </mask>
);

const TextureMask = (
  <mask
    id="textureMask"
    maskUnits="userSpaceOnUse"
    maskContentUnits="userSpaceOnUse"
  >
    <rect x="0" y="0" width="100%" height="100%" fill="url(#img1)" />
  </mask>
);

const TextureImage = (
  <pattern id="img1" patternUnits="userSpaceOnUse" width="100%" height="100%">
    <image
      href="https://i.pinimg.com/564x/a8/e8/6d/a8e86df065e6582be3870baebb5fa761.jpg"
      x="0"
      y="25%"
      width="100%"
      height="100%"
    />
  </pattern>
);

const Defs = props => {
  return (
    <SvgDefs>
      <defs>
        {Gradient}
        {TextureImage}
        {TextureMask}
        {Stripes}
        {StripeyWaves}
      </defs>
      {props.children}
    </SvgDefs>
  );
};

export default Defs;
