import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { animated } from "react-spring";

import Menu from "../../../components/UI/Icons/Menu/Menu";
import { clampedInterpolation as interp } from "../../../components/UI/Animations/clampedInterpolation";

const Header = styled.header`
  position: absolute;
  top: 0;
  height: 108px;
  width: 100%;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`;

const Home = styled.div`
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.04rem;
  cursor: pointer;
  color: var(--primary);
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
`;

const AnimatedHome = animated(Home);

const Toolbar = React.memo(({ scrollTop, openMenu }) => {
  const opacity = [1, 0];
  const animatedValue = {
    value: scrollTop,
    range: [0, 80]
  };
  const text = [0, 100];

  // const interpOpacity = interp(animatedValue, opacity);
  // const interpText = interp(animatedValue, text, x => x.toFixed());
  const interpWidth = interp(animatedValue, [200, 0], x => `${x}px`);

  return (
    <Header>
      <Link to="/">
        <AnimatedHome style={{ width: interpWidth }}>
          CHARLOTTE HUES
        </AnimatedHome>
      </Link>
      <Menu onClick={openMenu} color={"var(--primary)"} />
    </Header>
  );
});

export default Toolbar;
