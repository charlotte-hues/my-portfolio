import React from "react";
import { animated } from "react-spring";

import { Stripes, Texture } from "./Defs";
import ConditionalWrapper from "../../../../hoc/Utility/ConditionalWrapper";
import { clampedInterpolation as interp } from "../../Animations/clampedInterpolation";

const addPercentage = x => {
  return `${x}%`;
};

const Circle = ({
  animatedValue,
  width,
  x,
  y,
  opacity,
  layer,
  color,
  texture,
  stripes,
  uid
}) => {
  const interpSize = interp(animatedValue, width);
  const interpX = interp(animatedValue, x, addPercentage);
  const interpY = interp(animatedValue, y, addPercentage);
  const interpOpacity = interp(animatedValue, opacity);
  const interpColor = interp(animatedValue, color);

  return (
    <animated.div
      style={{
        position: "absolute",
        left: interpX,
        top: interpY,
        opacity: interpOpacity
      }}
    >
      <animated.svg
        viewBox="0 0 280 280"
        preserveAspectRatio="xMinYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        width={interpSize}
        height={interpSize}
        z-index={layer}
      >
        <ConditionalWrapper
          wrapper={children => <defs>{children}</defs>}
          condition={stripes || texture}
        >
          {texture && <Texture id={uid} style={texture} />}
          {stripes && <Stripes id={uid} {...stripes} />}
        </ConditionalWrapper>

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
            fill={color ? interpColor : "var(--primary)"}
            mask={texture && `url(#${uid}texture)`}
          />
        </ConditionalWrapper>
      </animated.svg>
    </animated.div>
  );
};

export default Circle;
