import React from "react";

const DefsContainer = props => {
  return (
    <svg viewBox={props.vb}>
      <defs>{props.children}</defs>
    </svg>
  );
};

export default DefsContainer;
