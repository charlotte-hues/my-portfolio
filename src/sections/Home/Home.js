import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import About from "../About/About";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";

const SectionContainer = styled.div`
  width: auto;
  height: auto;
`;

const scrollToRef = ref =>
  ref.current.scrollIntoView({ behavior: "smooth", block: "end" });

const Home = props => {
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  useEffect(() => {
    if (props.match.path === "/contact") {
      scrollToRef(contactRef);
    } else {
      scrollToRef(homeRef);
    }
  }, [props.match.path]);

  return (
    <>
      <SectionContainer ref={homeRef}>
        <About />
      </SectionContainer>
      <Work homepage />
      <SectionContainer ref={contactRef}>
        <Contact />
      </SectionContainer>
    </>
  );
};

export default Home;
