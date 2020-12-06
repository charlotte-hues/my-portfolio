import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Menu from "../../../components/UI/Icons/Menu/Menu";
import { useScrollPosition } from "../../../hooks/useScrollPosition";

const Header = styled.header`
  position: fixed;  
  height: 108px;
  width: 100%;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  top: ${props => (props.show ? "0" : "-110px")};
  // opacity: ${props => (props.show ? "1" : "0")};
  transition: all 0.3s ease;
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

const Toolbar = React.memo(({ openMenu }) => {
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    300
  );

  return (
    <Header show={hideOnScroll}>
      <Link to="/">
        <Home>CHARLOTTE HUES</Home>
      </Link>
      <Menu onClick={openMenu} color={"var(--primary)"} />
    </Header>
  );
});

export default Toolbar;
