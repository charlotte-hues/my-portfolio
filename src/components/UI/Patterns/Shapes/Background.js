import React from "react";

const Background = ({ data }) => {
  return (
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill={data.color ? data.color : "var(--background2)"}
    />
  );
};

export default Background;
