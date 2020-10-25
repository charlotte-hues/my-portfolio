import React from "react";
import StaticButton from "./staticButton";
import { animated } from "react-spring";

const Footer = ({ top }) => {
  const scrollMax = window.innerHeight * 4.5;
  const scrollColor = top.interpolate(
    [0, scrollMax * 0.25, scrollMax * 0.5, scrollMax * 0.75, scrollMax],
    ["red", "yellow", "white", "#7A8191", "blue"]
  );
  // const scrollColor = "red";
  return (
    <footer>
      <animated.div style={{ color: scrollColor }}>
        <span> ddd</span>
      </animated.div>
      <StaticButton>CONTACT</StaticButton>
    </footer>
  );
};

export default Footer;
