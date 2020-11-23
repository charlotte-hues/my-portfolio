import React from "react";

let stops = [];
for (let i = 1; i < 10; i++) {
  stops.push(
    <stop offset={`${i * 10}%`} stopColor={`rgba(255,255,255,${1 - i / 10})`} />
  );
}

export const Gradient = props => {
  return (
    <>
      <mask
        id="gradientMask"
        maskUnits="userSpaceOnUse"
        maskContentUnits="userSpaceOnUse"
      >
        <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" />
      </mask>

      <linearGradient
        id={props.id ? props.id : "gradient"}
        gradientTransform={`rotate(${props.angle ? props.angle : "90"})`}
      >
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
      </linearGradient>
    </>
  );
};

export const Stripes = ({ id, width, rotation, opacity, gap, invert }) => {
  return (
    <>
      <mask
        id={id ? `${id}StripeMask` : "stripeMask"}
        maskUnits="userSpaceOnUse"
        maskContentUnits="userSpaceOnUse"
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={invert ? "black" : "white"}
        />
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#${id ? `${id}StripePattern` : "stripePattern"})`}
        />
      </mask>

      <pattern
        patternTransform={`rotate(${rotation ? rotation : 0})`}
        id={id ? `${id}StripePattern` : "stripePattern"}
        width={width ? width : "6"}
        height="1"
        patternUnits="userSpaceOnUse"
      >
        <line
          stroke={invert ? "white" : "black"}
          strokeWidth={gap ? gap : "4px"}
          y2="1"
          opacity={`${opacity ? opacity : 0.7}`}
        />
      </pattern>
    </>
  );
};

export const GrainyTexture = props => {
  return (
    <>
      <mask
        id="grainy"
        maskUnits="userSpaceOnUse"
        maskContentUnits="userSpaceOnUse"
      >
        <rect x="0" y="0" width="100%" height="100%" fill="url(#grainyImage)" />
      </mask>

      <pattern
        id="grainyImage"
        patternUnits="userSpaceOnUse"
        width="100%"
        height="100%"
      >
        <image
          href="https://i.pinimg.com/564x/a8/e8/6d/a8e86df065e6582be3870baebb5fa761.jpg"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        />
      </pattern>
    </>
  );
};
