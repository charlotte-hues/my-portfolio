import React from "react";
import styled from "styled-components";

import NavigationItems from "../NavigationItems/NavigationItems";

const StyledMenu = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 400;
  background-color: #272727;
  padding: 20% 20%;

  opacity: ${props => (props.open ? 1 : 0)};
  transform: ${props => (props.open ? "translateX(0)" : "translateX(100vw)")};
  transition: opacity 0.3s ease;
`;

const SideMenu = props => {
  return (
    <>
      <StyledMenu open={props.show} onClick={props.close} />
      <NavigationItems />
    </>
  );
};

export default SideMenu;
