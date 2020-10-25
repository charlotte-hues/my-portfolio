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

    background-color: #f1f4f8;
    color: black;
    cursor: pointer;
    border: 4px solid black;    
    border-radius: 100%;
    
    &:hover {
        background-color: grey;
    }
  }
`;

const StaticButton = props => {
  return <StyledStaticButton>{props.children}</StyledStaticButton>;
};

export default StaticButton;
