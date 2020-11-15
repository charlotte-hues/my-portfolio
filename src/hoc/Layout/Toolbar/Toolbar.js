import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Menu from "../../../components/UI/Icons/Menu/Menu";

const Header = styled.header`
  position: absolute;
  top: 0;
  height: 108px;
  width: 100%;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`;

const Home = styled.div`
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.04rem;
  cursor: pointer;
  color: var(--primary);
`;

const Toolbar = props => {
  return (
    <Header>
      <Link to="/">
        <Home>CHARLOTTE HUES</Home>
      </Link>
      <Menu onClick={props.openMenu} color={"var(--primary)"} />
    </Header>
  );
};

export default Toolbar;
