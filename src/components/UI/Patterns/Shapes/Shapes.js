import React from "react";

import Circle from "./Circle";
import Waves from "./Waves";
import Background from "./Background";

const Shapes = {
  circle: Circle,
  waves: Waves,
  background: Background
};

const shape = props => {
  if (typeof Shapes[props.component] !== "undefined") {
    return React.createElement(Shapes[props.component], {
      key: props.uid,
      data: props.data,
      id: props.uid
    });
  }
  console.log(`${props.component} does not exist`);
  return null;
};

export default shape;
