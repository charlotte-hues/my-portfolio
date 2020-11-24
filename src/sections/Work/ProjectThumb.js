import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect
} from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

import Patterns from "../../components/UI/Patterns/Patterns";

const Container = styled.div`
  position: relative;
  height: 250px;
  margin: 20px 0;
`;

const ThumbTitle = styled.div`
  position: absolute;
  top: 10%;
  width: 160px;
  height: 160px;
  border-radius: 100%;
  color: var(--primary);
  background: var(--background);
  justify-content: center;
  margin: 20px;
`;

const AnimatedPattern = animated(Patterns);

const ProjectThumb = props => {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
  }, []);

  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));

  const scroll = st.interpolate(o => 30 + 0);
  console.log(scroll);

  const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), []);
  const onMove = useCallback(({ clientX: x, clientY: y }) =>
    set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] })
  );

  const fixedShapes = {
    component: "circle",
    uid: "kkksjsj",
    data: {
      color: "var(--background)",
      texture: true,
      x: "100%",
      y: "100%",
      size: "200",

      stripes: {
        invert: true,
        rotation: "45",
        opacity: "0.7",
        width: "6",
        gap: "4px"
      }
    }
  };

  return (
    <Container ref={targetRef} onMouseMove={onMove}>
      <ThumbTitle>
        <h3>{props.children}</h3>
      </ThumbTitle>
      <AnimatedPattern
        stretch={props.patternData.stretch}
        fixed={props.patternData.fixed}
      />
    </Container>
  );
};

export default ProjectThumb;
