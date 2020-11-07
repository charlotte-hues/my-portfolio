import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  height: 108px;
  width: 100%;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  z-index: 100;
`;

const Toolbar = props => {
  const handleMenuClick = () => {
    props.openMenu();
  };

  return (
    <StyledHeader>
      <Link to="/">
        <div className="navText">
          <span>CHARLOTTE HUES</span>
        </div>
      </Link>
      <div onClick={() => handleMenuClick()} className="navText">
        <span>MENU</span>
      </div>
    </StyledHeader>
  );
};

export default Toolbar;
