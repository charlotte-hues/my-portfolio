import React from "react";
import styled from "styled-components";

const StyledStaticButton = styled.button`
    position: absolute;
    bottom: 2vh;
    right: 2vw;

    align-content: center;
    align-items: center;
    font-weight: 900;
    text-align: center;
    height: 90px;
    width: 90px;
    vertical-align: middle;
    line-height: 80px;

    background-color: rgba(255,255,255,0);
    color: black;
    cursor: pointer;
    border: 4px solid black;    
    border-radius: 100%;
    transition: all 0.2s ease;
    
    &:hover {
        background-color: rgba(255,255,255,0.2);
        transition: all 0.2s ease;
    }
  }
`;

const StaticButton = props => {
  return (
    <StyledStaticButton bkgdColor={props.color}>
      {props.children}
    </StyledStaticButton>
  );
};

export default StaticButton;
