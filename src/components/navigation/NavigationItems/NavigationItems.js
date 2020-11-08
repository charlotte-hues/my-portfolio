import React from "react";
import styled from "styled-components";

import device from "../../../hoc/Device/Device";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavItemsContainer = styled.nav`
  position: fixed;
  width: auto;
  height: auto;
  left: 0;
  top: 0;
  z-index: 450;
  padding: 20% 20%;

  @media ${device.laptop} {
  }
`;

const NavigationItems = props => {
  return (
    <NavItemsContainer onClick={() => props.close()}>
      <NavigationItem link="/about" active>
        ABOUT
      </NavigationItem>
      <NavigationItem link="/work" active>
        WORK
      </NavigationItem>
      <NavigationItem link="/contact" active>
        CONTACT
      </NavigationItem>
    </NavItemsContainer>
  );
};

export default NavigationItems;
