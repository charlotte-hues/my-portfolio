import React from "react";

import { Stripes } from "./Defs";

const Circle = ({ data, id }) => {
  return (
    <>
      <defs>{data.stripes && <Stripes id={id} {...data.stripes} />}</defs>
      <g mask={`url(#${id}StripeMask)`}>
        <circle
          cx={data.x ? data.x : "140"}
          cy={data.y ? data.y : "140"}
          r={data.size ? data.size : "70"}
          fill={data.color ? data.color : "var(--background3)"}
          mask={data.texture && "url(#grainy)"}
        />
      </g>
    </>
  );
};

export default Circle;
