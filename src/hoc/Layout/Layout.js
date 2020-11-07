import React, { useState } from "react";
import styled from "styled-components";

import Toolbar from "./Toolbar";
import SideMenu from "../../components/navigation/SideMenu/SideMenu";

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 80px 20px;
  overflow: scroll;
`;

const Layout = props => {
  const [sideMenuIsVisible, setSideMenuIsVisible] = useState(false);

  const openMenu = () => {
    setSideMenuIsVisible(true);
  };

  const closeMenu = () => {
    setSideMenuIsVisible(false);
  };

  return (
    <>
      <Toolbar openMenu={openMenu} />
      <SideMenu show={sideMenuIsVisible} close={closeMenu} />
      <StyledMain>{props.children}</StyledMain>
    </>
  );
};

export default Layout;
