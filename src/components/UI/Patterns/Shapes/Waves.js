import React from "react";
import { animated } from "react-spring";

import { Stripes, Gradient, Texture } from "./Defs";
import ConditionalWrapper from "../../../../hoc/Utility/ConditionalWrapper";
import { clampedInterpolation as interp } from "../../Animations/clampedInterpolation";

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
  const wavePath1 = [
    "M274 148.5C275.5 148.5 277.5 147.5 280 146.819V280.5H0V147C3 145.5 36 126.111 46 126.111C56 126.111 58.8667 155.765 74.5 152C90.1333 148.235 107.514 128.373 124 130.5C139.5 132.5 157 163 171 157C185.78 150.666 208.062 127.479 223 122.5C238 117.5 250 137.5 257 142C268.269 149.244 272.5 148.5 274 148.5Z",
    "M266.5 149C268.2 147.916 274 143 280 146.819V280.5H0V147C3 145.5 6.5 134 16.5 134C26.5 134 25.3667 148.765 41 145C56.6333 141.235 78.3667 128.352 94 134C109.633 139.648 121.867 155.765 137.5 152C153.133 148.235 171.033 127.994 186.667 126.111C202.3 124.228 217.7 146.819 233.333 154.349C248.967 161.879 264.8 150.084 266.5 149Z",
    "M274 148.5C275.5 148.5 277.5 147.5 280 146.819V280.5H0V147C3 145.5 36 126.111 46 126.111C56 126.111 58.8667 155.765 74.5 152C90.1333 148.235 107.514 128.373 124 130.5C139.5 132.5 157 163 171 157C185.78 150.666 208.062 127.479 223 122.5C238 117.5 250 137.5 257 142C268.269 149.244 272.5 148.5 274 148.5Z"
  ];

  const interpWaves1 = interp(animatedValue, wavePath1);

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
              <animated.path d={interpWaves1} fill="url(#gradient)" />
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
