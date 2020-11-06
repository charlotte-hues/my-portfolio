import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavLi = styled(NavLink)`
  box-sizing: border-box;
  display: block;

  text-align: left;

  width: 100%;
  line-height: 80px;

  transition: all 0.1s ease-in;
  text-decoration: none;
  white-space: nowrap;

  color: #636363;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.04rem;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  &.Active {
    color: white;
    border-bottom: 2px solid var(--orange);
    &:hover {
      cursor: default;
      transform: none;
    }
  }
`;

const navigationItem = props => (
  <NavLi to={props.link} activeClassName="Active">
    {props.children}
  </NavLi>
);

export default navigationItem;
