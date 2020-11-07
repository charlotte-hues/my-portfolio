import React from "react";
import styled from "styled-components";

// TODO - DELETE THIS CONTAINER

const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: yellow;
  color: red;
`;

const About = () => {
  return (
    <Container>
      <h1>About</h1>
    </Container>
  );
};

export default About;
