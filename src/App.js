import React from "react";
import { useSpring } from "react-spring";

import "./App.css";
import Header from "./shared/components/navigation/header";
import Footer from "./shared/components/navigation/footer";

import IconsProjectContent from "./projects/pages/IconsProject/IconsProjectContent";

const App = () => {
  const [{ scrollTop }, set] = useSpring(() => ({ scrollTop: 0 }));
  const onScroll = e => {
    set({ scrollTop: e.target.scrollTop });
  };

  return (
    <>
      <Header />
      <main onScroll={onScroll}>
        <IconsProjectContent />
      </main>
      <Footer top={scrollTop} />
    </>
  );
};

export default App;
