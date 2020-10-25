import React from "react";
import Background from "./background";
import { useThree } from "react-three-fiber";

const Scene = ({ top }) => {
  const { size } = useThree();
  const scrollMax = size.height * 4.5;
  return (
    <>
      <Background
        color={top.interpolate(
          [0, scrollMax * 0.25, scrollMax * 0.5, scrollMax * 0.75, scrollMax],
          ["#6D757B", "#727287", "#7A8D91", "#7A8191", "#6D757B"]
        )}
      />
    </>
  );
};

export default Scene;
