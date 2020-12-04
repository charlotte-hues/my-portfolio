import React from "react";
import styled from "styled-components";

// TODO - DELETE THIS CONTAINER

const Container = styled.div`
  width: 100%;
  height: 250px;
  // background: var(--background2);
  color: var(--primary);
`;

const Contact = () => {
  return (
    <Container>
      <h3>GET IN TOUCH</h3>
      <h1>CHARLOTTE@{"\n"}CHARLOTTEHUES.COM</h1>
    </Container>
  );
};

export default Contact;
