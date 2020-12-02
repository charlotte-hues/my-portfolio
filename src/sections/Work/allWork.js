const currentYear = new Date().getFullYear();

const allWork = [
  {
    pathName: "icons",
    component: "IconsProject",
    title: "Iconography",
    client: "various",
    year: `2018 - ${currentYear}`,
    homepage: true
  },
  {
    pathName: "logos",
    component: "IconsProject",
    title: "Logofolio",
    client: "various",
    year: `2018 - ${currentYear}`,
    homepage: false
  },
  {
    pathName: "enfocengine",
    component: "IconsProject",
    title: "Enforcengine App Suite",
    client: "Jacobs Technology",
    year: `2018 - ${currentYear}`,
    homepage: false
  },
  {
    pathName: "emotion-sim",
    component: "IconsProject",
    title: "Emotion Simulator",
    client: "The Future Laboratory",
    year: `2020`,
    homepage: true
  },
  {
    pathName: "infinite-coloring-book",
    component: "IconsProject",
    title: "The Infinite Colouring Book",
    client: "My two step children!",
    year: `2020`,
    homepage: true
  },
  {
    pathName: "project-60",
    component: "IconsProject",
    title: "Project 60",
    client: "Jacobs",
    year: `2018 - ${currentYear}`,
    homepage: false
  },
  {
    pathName: "glitch",
    component: "IconsProject",
    title: "Glitch Boot",
    client: "Adidas",
    year: `2017`,
    homepage: false
  }
];

export default allWork;
