import React from "react";
import { useThree } from "react-three-fiber";
import { animated } from "react-spring/three";

const Background = ({ color }) => {
  const { viewport } = useThree();
  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry attach="geometry" args={[1, 1]} />
      <animated.meshBasicMaterial
        attach="material"
        color={color}
        depthTest={false}
      />
    </mesh>
  );
};

export default Background;
