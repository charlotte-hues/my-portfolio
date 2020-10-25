import React, { useRef, useEffect } from "react";
import "./App.css";
import * as THREE from "three";
import { useSprings, a } from "react-spring/three";
import Header from "./shared/components/header";

import { Canvas, useFrame } from "react-three-fiber";
// import { softShadows, MeshWobbleMaterial } from "drei";

// softShadows();

const number = 35;
const colors = ["#6D757B", "#727287", "#7A8D91", "#7A8191", "yellow", "orange"];

const random = i => {
  const r = Math.random();
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 14, 1 + r * 14, 1],
    rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)]
  };
};

const data = new Array(number).fill().map(() => {
  return {
    color: colors[Math.round(Math.random() * colors.length - 1)],
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10]
  };
});

const Content = () => {
  const [springs, set] = useSprings(number, i => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 150, friction: 50 }
  }));
  useEffect(
    () =>
      void setInterval(() => set(i => ({ ...random(i), delay: i * 40 })), 3000),
    []
  );
  return data.map((d, index) => (
    <a.mesh key={index} {...springs[index]} position={random(index).position}>
      <boxBufferGeometry attach="geometry" args={d.args} />
      <meshStandardMaterial attach="material" color={d.color} />
    </a.mesh>
  ));
};

//Original

// const SpinningCube = ({ position, color, args }) => {
//   const mesh = useRef(null);
//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
//   return (
//     <mesh castShadow ref={mesh} position={position}>
//       <boxBufferGeometry attach="geometry" args={args} />
//       <meshStandardMaterial attach="material" color={color} />
//     </mesh>
//   );
// };

const Lighting = () => {
  return (
    <React.Fragment>
      <ambientLight intensity={0.3} />
      <directionalLight intensity={0.2} castShadow />
      <pointLight intensity={0.5} position={[-10, 0, -20]} />
      <pointLight intensity={1.5} position={[0, -10, 0]} />
    </React.Fragment>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [0, 0, 100], fov: 100 }}
      >
        <Lighting />

        <Content />

        {/* <SpinningCube args={[2, 2, 1]} position={[2, 0, 0]} color="grey" />
        <SpinningCube args={[1, 1, 2]} position={[-2, 1, 0]} color="orange" />
        <SpinningCube args={[1, 1, 0.1]} position={[0, 0, 0]} color="aqua" /> */}

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.05} />
          </mesh>
        </group>
      </Canvas>
    </>
  );
};

export default App;
