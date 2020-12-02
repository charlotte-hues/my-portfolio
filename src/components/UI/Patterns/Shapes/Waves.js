import React from "react";
import { animated } from "react-spring";

import { Stripes, Gradient, GrainyTexture } from "./Defs";
import ConditionalWrapper from "../../../../hoc/Utility/ConditionalWrapper";
import { clampedInterpolation as interp } from "../../Animations/clampedInterpolation";

const Waves = ({
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
  const interpSize = interp({ animatedValue: animatedValue, value: width });
  const interpX = interp({
    animatedValue: animatedValue,
    value: x
  }).interpolate(x => `${x}%`);
  const interpY = interp({
    animatedValue: animatedValue,
    value: y
  }).interpolate(x => `${x}%`);
  return (
    <svg
      viewBox="0 0 280 280"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      margin="auto"
      width="100%"
      height="100%"
      position="absolute"
      display="block"
      bottom="0"
      z-index="20"
    >
      {texture && (
        <defs>
          <GrainyTexture />
        </defs>
      )}
      {stripes && (
        <defs>
          <Stripes id={uid} {...stripes} />
        </defs>
      )}
      <defs>
        <Gradient />
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
            <path
              d="M272.3 150.584L280 146.819V280.5H0V146.819H7.70001C15.6333 146.819 31.0333 146.819 46.6667 143.054C62.3 139.289 77.7 131.759 93.3333 137.406C108.967 143.054 124.367 161.879 140 158.114C155.633 154.349 171.033 127.994 186.667 126.111C202.3 124.228 217.7 146.819 233.333 154.349C248.967 161.879 264.367 154.349 272.3 150.584Z"
              fill="url(#gradient)"
            />
            <path
              d="M7.7 238.584L0 234.819V280H280V234.819H272.3C264.367 234.819 248.967 234.819 233.333 231.054C217.7 227.289 202.3 219.759 186.667 225.406C171.033 231.054 155.633 249.879 140 246.114C124.367 242.349 108.967 215.994 93.3333 214.111C77.7 212.228 62.3 234.819 46.6667 242.349C31.0333 249.879 15.6333 242.349 7.7 238.584Z"
              fill="url(#gradient)"
            />
          </ConditionalWrapper>
        </mask>
      </defs>
      <g mask="url(#waveMask)">
        <rect
          mask={texture && "url(#grainy)"}
          fill={color ? color : "var(--primary)"}
          width="100%"
          height="100%"
        />
      </g>
    </svg>
  );
};

export default Waves;
