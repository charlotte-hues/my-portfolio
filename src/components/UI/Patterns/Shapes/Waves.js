import React from "react";

import { Stripes } from "./Defs";

const Waves = ({ data, id }) => {
  return (
    <>
      <defs>
        {data.stripes && <Stripes id={id} {...data.stripes} />}
        <mask
          id="waveMask"
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
        >
          <g mask={data.stripes && `url(#${id}StripeMask)`}>
            <path
              d="M272.3 150.584L280 146.819V280.5H0V146.819H7.70001C15.6333 146.819 31.0333 146.819 46.6667 143.054C62.3 139.289 77.7 131.759 93.3333 137.406C108.967 143.054 124.367 161.879 140 158.114C155.633 154.349 171.033 127.994 186.667 126.111C202.3 124.228 217.7 146.819 233.333 154.349C248.967 161.879 264.367 154.349 272.3 150.584Z"
              fill="url(#gradient)"
            />
            <path
              d="M7.7 238.584L0 234.819V280H280V234.819H272.3C264.367 234.819 248.967 234.819 233.333 231.054C217.7 227.289 202.3 219.759 186.667 225.406C171.033 231.054 155.633 249.879 140 246.114C124.367 242.349 108.967 215.994 93.3333 214.111C77.7 212.228 62.3 234.819 46.6667 242.349C31.0333 249.879 15.6333 242.349 7.7 238.584Z"
              fill="url(#gradient)"
            />
          </g>
        </mask>
      </defs>
      <g mask="url(#waveMask)">
        <rect
          mask={data.texture && "url(#grainy)"}
          fill={data.color ? data.color : "#074FA9"}
          width="100%"
          height="100%"
        />
      </g>
    </>
  );
};

export default Waves;
