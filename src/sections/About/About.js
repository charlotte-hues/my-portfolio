import React from "react";
import styled from "styled-components";

// TODO - DELETE THIS CONTAINER

const Container = styled.div`
  width: 100%;
  height: 600px;
  color: var(--background4);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h1 {
    font-size: 3.5rem;
    margin: 0;
  }

  & p {
    max-width: 400px;
  }
`;

const About = () => {
  return (
    <Container>
      <h1>DESIGNER</h1>
      <h1>CREATIVE</h1>
      <h1>DEVELOPER</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum ante
        urna, hendrerit et. Tellus quam dictum suspendisse felis eros. Neque sed
        praesent in elementum cursus massa. Porta viverra vulputate netus proin.
        Ornare nulla nibh leo, etiam lorem et lectus massa. Eros, dictum turpis
        sed amet diam in gravida. Vitae suspendisse scelerisque sollicitudin
        nisl. Donec sed neque, proin mattis. Cum tempus leo dictumst ut. Orci
        dignissim nisl quis cursus.
      </p>
    </Container>
  );
};

export default About;
