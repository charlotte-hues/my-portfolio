import React, { useState } from "react";
import { useSpring } from "react-spring";

import Header from "./header";
import Footer from "./footer";
import SideMenu from "../../components/navigation/SideMenu/SideMenu";

const Layout = props => {
  const [sideMenuIsVisible, setSideMenuIsVisible] = useState(false);

  const [{ scrollTop }, set] = useSpring(() => ({ scrollTop: 0 }));
  const onScroll = e => {
    set({ scrollTop: e.target.scrollTop });
  };

  return (
    <>
      <Header />
      <SideMenu show={sideMenuIsVisible} close />
      <main onScroll={onScroll}>{props.children}</main>
      <Footer top={scrollTop} />
    </>
  );
};

export default Layout;
