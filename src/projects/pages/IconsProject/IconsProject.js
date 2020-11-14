import React from "react";
import styled from "styled-components";

import ProjectCard from "../../components/ProjectCard";
import iconData from "./content/IconsProjectData";

const IconSetContainer = styled(ProjectCard)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 20px;
  background-color: #e5e5e5;
  background-color: ${props => props.background};
`;

const Container = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  width: ${props => props.size};
  height: ${props => props.size};
  margin: 20px 30px;

  position: relative;
`;

const IconSets = Object.keys(iconData)
  .map(setName => {
    return (
      <IconSetContainer key={setName} background={iconData[setName].background}>
        {Object.keys(iconData[setName].icons).map((currIcon, i) => {
          let Icon = iconData[setName].icons[currIcon];
          return (
            <Container size={iconData[setName].size} key={currIcon}>
              <Icon color={iconData[setName].iconColor} />
            </Container>
          );
        })}
      </IconSetContainer>
    );
  })
  .reduce((arr, el) => {
    return arr.concat(el);
  }, []);

const IconsProject = () => {
  return <>{IconSets}</>;
};

export default IconsProject;
