import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useSpring } from "react-spring";

import Toolbar from "./Toolbar/Toolbar";
import SideMenu from "./SideMenu/SideMenu";

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 80px 20px;
  overflow: scroll;
`;

const Layout = props => {
  const [sideMenuIsVisible, setSideMenuIsVisible] = useState(false);
  const [{ scrollTop }, setSpring] = useSpring(() => ({ scrollTop: 0 }));

  const openMenu = useCallback(() => {
    setSideMenuIsVisible(true);
  }, [setSideMenuIsVisible]);

  const closeMenu = useCallback(() => {
    setSideMenuIsVisible(false);
  }, [setSideMenuIsVisible]);

  const onScroll = useCallback(
    e => {
      setSpring({ scrollTop: e.target.scrollTop });
    },
    [setSpring]
  );

  return (
    <>
      <Toolbar scrollTop={scrollTop} openMenu={openMenu} />
      <SideMenu isOpen={sideMenuIsVisible} close={closeMenu} />
      <StyledMain id="MainContent" onScroll={e => onScroll(e)}>
        {props.children}
      </StyledMain>
    </>
  );
};

export default Layout;
