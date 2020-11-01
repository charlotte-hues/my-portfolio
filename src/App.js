import React, { useCallback } from "react";
import { Canvas } from "react-three-fiber";
import styled from "styled-components";
import { useSpring as useSpringThree } from "react-spring/three";
import { useSpring } from "react-spring";

import "./App.css";
import Header from "./shared/components/navigation/header";
import Footer from "./shared/components/navigation/footer";
import Scene from "./shared/scene/scene";

import IconsProjectContent from "./projects/pages/IconsProject/IconsProjectContent";

// const number = 35;
// const colors = ["#6D757B", "#727287", "#7A8D91", "#7A8191", "yellow", "orange"];

// const random = i => {
//   const r = Math.random();
//   return {
//     position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
//     color: colors[Math.round(Math.random() * (colors.length - 1))],
//     scale: [1 + r * 14, 1 + r * 14, 1]
//     // rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)]
//   };
// };

const ScrollContainer = styled.div`
  position: absolute;
  overflow: auto;
  top: 0px;
  width: 100%;
  height: 100vh;
`;

const App = () => {
  const [{ top }, setThree] = useSpringThree(() => ({ top: 0 }));
  const [{ scrollTop }, set] = useSpring(() => ({ scrollTop: 0 }));
  const onScroll = e => {
    setThree({ top: e.target.scrollTop });
    set({ scrollTop: e.target.scrollTop });
  };

  return (
    <>
      {/* <Canvas className="canvas">
        <Scene top={top} />
      </Canvas>
      <ScrollContainer onScroll={onScroll}>
        <div style={{ height: "500vh" }} />
      </ScrollContainer> */}
      <Header />
      <main>
        <IconsProjectContent />
      </main>

      <Footer top={scrollTop} />
    </>
  );
};

export default App;
