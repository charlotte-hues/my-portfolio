const currentYear = new Date().getFullYear();

const allWork = [
  {
    pathName: "icons",
    component: "IconsProject",
    title: "ICONOGRAPHY",
    client: "various",
    year: `2018 - ${currentYear}`,
    homepage: true
  },
  {
    pathName: "logos",
    component: "IconsProject",
    title: "LOGOFOLIO",
    client: "various",
    year: `2018 - ${currentYear}`,
    homepage: false
  },
  {
    pathName: "enfocengine",
    component: "IconsProject",
    title: "ENFORCENGINE APP SUITE",
    client: "Jacobs Technology",
    year: `2018 - ${currentYear}`,
    homepage: false
  },
  {
    pathName: "emotion-sim",
    component: "IconsProject",
    title: "EMOTION SIMULATOR",
    client: "The Future Laboratory",
    year: `2020`,
    homepage: true
  },
  {
    pathName: "infinite-coloring-book",
    component: "IconsProject",
    title: "THE INFINITE COLORING BOOK",
    client: "My two step children!",
    year: `2020`,
    homepage: true
  },
  {
    pathName: "project-60",
    component: "IconsProject",
    title: "PROJECT 60",
    client: "Jacobs",
    year: `2018 - ${currentYear}`,
    homepage: false
  },
  {
    pathName: "glitch",
    component: "IconsProject",
    title: "GLITCH",
    client: "Adidas",
    year: `2017`,
    homepage: false
  }
];

export default allWork;
