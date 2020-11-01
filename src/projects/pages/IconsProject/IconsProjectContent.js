import React from "react";
import * as LawIcons from "./lawIcons/lawIcons";
import styled from "styled-components";

import ProjectCard from "../../components/ProjectCard";

const iconsArr = [];
for (let icon in LawIcons) {
  iconsArr.push(LawIcons[icon]);
}

const IconSetContainer = styled(ProjectCard)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 100px;
`;

const Container = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 40px 60px;

  position: relative;
`;

const LawIconsList = iconsArr.map(Icon => {
  return (
    <Container key={Icon.name}>
      <Icon />
    </Container>
  );
});

const IconsProjectContent = () => {
  return (
    <>
      <IconSetContainer>{LawIconsList}</IconSetContainer>
      <IconSetContainer>{LawIconsList}</IconSetContainer>
    </>
  );
};

export default IconsProjectContent;
