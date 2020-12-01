const currentYear = new Date().getFullYear();

const Circle1 = {
  fixed: {
    component: "Circle",
    texture: true,
    layer: "0",
    stripes: {
      invert: true,
      rotation: 45
    },
    animatable: {
      width: {
        main: 40,
        start: 2,
        end: 2
      },
      x: {
        main: 50,
        start: 0,
        end: 100
      },
      y: {
        main: 50,
        start: 100,
        end: 0
      }
    }
  }
};

const Circle2 = {
  fixed: {
    component: "Circle",
    texture: true,
    layer: "0",
    stripes: {
      invert: true,
      rotation: 45
    },
    animatable: {
      width: {
        main: 100,
        start: 200,
        end: 200
      },
      x: {
        main: 10,
        start: 2,
        end: 10
      },
      y: {
        main: 10,
        start: 70,
        end: 0
      }
    }
  }
};

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
