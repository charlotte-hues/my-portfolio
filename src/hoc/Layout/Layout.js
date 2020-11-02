import React from "react";
import { useSpring } from "react-spring";

import Header from "./header";
import Footer from "./footer";

const Layout = props => {
  const [{ scrollTop }, set] = useSpring(() => ({ scrollTop: 0 }));
  const onScroll = e => {
    set({ scrollTop: e.target.scrollTop });
  };

  return (
    <>
      <Header />
      <main onScroll={onScroll}>{props.children}</main>
      <Footer top={scrollTop} />
    </>
  );
};

export default Layout;
