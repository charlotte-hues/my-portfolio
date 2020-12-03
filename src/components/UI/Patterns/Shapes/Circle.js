import React from "react";
import { animated } from "react-spring";

import { Stripes, GrainyTexture } from "./Defs";
import ConditionalWrapper from "../../../../hoc/Utility/ConditionalWrapper";
import { clampedInterpolation as interp } from "../../Animations/clampedInterpolation";

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
  const interpSize = interp(animatedValue, width);
  const interpX = interp(animatedValue, x).interpolate(x => `${x}%`);
  const interpY = interp(animatedValue, y).interpolate(x => `${x}%`);

  return (
    <animated.div style={{ position: "absolute", left: interpX, top: interpY }}>
      <animated.svg
        viewBox="0 0 280 280"
        preserveAspectRatio="xMinYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        width={interpSize}
        height={interpSize}
        z-index={layer}
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
        <ConditionalWrapper
          wrapper={children => (
            <g mask={`url(#${uid}StripeMask)`}>{children}</g>
          )}
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
      </animated.svg>
    </animated.div>
  );
};

export default Circle;
