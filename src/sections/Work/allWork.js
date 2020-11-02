import IconsProject from "../../projects/pages/IconsProject/IconsProject";

const currentYear = new Date().getFullYear();

const allWork = [
  {
    pathName: "icons",
    component: IconsProject,
    title: "Iconography",
    client: "various",
    year: `2018 - ${currentYear}`,
    homepage: true
  },
  {
    pathName: "logos",
    component: IconsProject,
    title: "Logofolio",
    client: "various",
    year: `2018 - ${currentYear}`,
    homepage: false
  }
];

export default allWork;
