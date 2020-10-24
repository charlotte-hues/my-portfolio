import React, { useRef } from "react";
import "./App.css";
import Header from "./shared/components/header";

import { Canvas, useFrame } from "react-three-fiber";
import { softShadows, MeshDistortMaterial } from "drei";

softShadows();

const SpinningCube = ({ position, color, args }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh castShadow ref={mesh} position={position}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

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
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        <Lighting />

        <SpinningCube args={[2, 2, 1]} position={[2, 0, 0]} color="grey" />
        <SpinningCube args={[1, 1, 2]} position={[-2, 1, 0]} color="orange" />
        <SpinningCube args={[1, 1, 0.1]} position={[0, 0, 0]} color="aqua" />

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
