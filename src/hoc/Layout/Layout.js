import React, { useState, useCallback } from "react";
import styled from "styled-components";

import Toolbar from "./Toolbar/Toolbar";
import SideMenu from "./SideMenu/SideMenu";

const StyledMain = styled.main`
  width: 100%;
  height: auto;
  margin: auto;
  padding: 80px 20px;
`;

const Layout = props => {
  const [sideMenuIsVisible, setSideMenuIsVisible] = useState(false);

  const openMenu = useCallback(() => {
    setSideMenuIsVisible(true);
  }, [setSideMenuIsVisible]);

  const closeMenu = useCallback(() => {
    setSideMenuIsVisible(false);
  }, [setSideMenuIsVisible]);

  return (
    <>
      <Toolbar openMenu={openMenu} />
      <SideMenu isOpen={sideMenuIsVisible} close={closeMenu} />
      <StyledMain id="MainContent">{props.children}</StyledMain>
    </>
  );
};

export default Layout;
