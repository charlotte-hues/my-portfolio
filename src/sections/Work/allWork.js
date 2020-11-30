import IconsProject from "../../projects/pages/IconsProject/IconsProject";

const currentYear = new Date().getFullYear();

const allWork = [
  {
    pathName: "icons",
    component: IconsProject,
    title: "Iconography",
    client: "various",
    year: `2018 - ${currentYear}`,
    homepage: true,
    color: "aqua",
    pattern: {
      background: "var(--background4)",
      shapes: [
        {
          component: "Circle",
          width: "150px",
          texture: true,
          rotate: "45",
          layer: "0",
          top: "0%",
          position: ["-10%", "50%"],
          stripes: { invert: true, rotation: "45" },
          uid: "iconsCircle1"
        },
        {
          component: "Circle",
          color: "red",
          width: "100px",
          texture: true,
          rotate: "45",
          layer: "1",
          top: "0%",
          position: ["50%", "50%"],
          stripes: { rotation: "-45" },
          uid: "iconsCircle2"
        }
      ]
    }
  },
  {
    pathName: "logos",
    component: IconsProject,
    title: "Logofolio",
    client: "various",
    year: `2018 - ${currentYear}`,
    homepage: false,
    color: "pink",
    pattern: {
      background: "var(--background4)",
      shapes: [
        {
          component: "Circle",
          width: "150px",
          texture: true,
          rotate: "45",
          layer: "0",
          top: "0%",
          position: ["-10%", "50%"],
          stripes: { invert: true, rotation: "45" },
          uid: "logosCircle1"
        }
      ]
    }
  },
  {
    pathName: "enfocengine",
    component: IconsProject,
    title: "Enforcengine App Suite",
    client: "Jacobs Technology",
    year: `2018 - ${currentYear}`,
    homepage: false,
    pattern: {
      background: "var(--background4)",
      shapes: [
        {
          component: "Circle",
          width: "150px",
          texture: true,
          rotate: "45",
          layer: "0",
          top: "0%",
          position: ["-10%", "50%"],
          stripes: { invert: true, rotation: "45" },
          uid: "eeCircle1"
        }
      ]
    }
  },
  {
    pathName: "emotion-sim",
    component: IconsProject,
    title: "Emotion Simulator",
    client: "The Future Laboratory",
    year: `2020`,
    homepage: true,
    pattern: {
      background: "var(--background4)",
      shapes: [
        {
          component: "Circle",
          width: "150px",
          texture: true,
          rotate: "45",
          layer: "0",
          top: "0%",
          position: ["-10%", "50%"],
          stripes: { invert: true, rotation: "45" },
          uid: "emotSimCircle1"
        }
      ]
    }
  },
  {
    pathName: "infinite-coloring-book",
    component: IconsProject,
    title: "The Infinite Colouring Book",
    client: "My two step children!",
    year: `2020`,
    homepage: true,
    pattern: {
      background: "var(--background4)",
      shapes: [
        {
          component: "Circle",
          width: "150px",
          texture: true,
          rotate: "45",
          layer: "0",
          top: "0%",
          position: ["-10%", "50%"],
          stripes: { invert: true, rotation: "45" },
          uid: "coloringbookCircle1"
        }
      ]
    }
  },
  {
    pathName: "project-60",
    component: IconsProject,
    title: "Project 60",
    client: "Jacobs",
    year: `2018 - ${currentYear}`,
    homepage: false,
    pattern: {
      background: "var(--background4)",
      shapes: [
        {
          component: "Circle",
          width: "150px",
          texture: true,
          rotate: "45",
          layer: "0",
          top: "0%",
          position: ["-10%", "50%"],
          stripes: { invert: true, rotation: "45" },
          uid: "p60circle1"
        }
      ]
    }
  },
  {
    pathName: "glitch",
    component: IconsProject,
    title: "Glitch Boot",
    client: "Adidas",
    year: `2017`,
    homepage: false,
    pattern: {
      background: "var(--background4)",
      shapes: [
        {
          component: "Circle",
          width: "150px",
          texture: true,
          rotate: "45",
          layer: "0",
          top: "0%",
          position: ["-10%", "50%"],
          stripes: { invert: true, rotation: "45" },
          uid: "glitchCircle1"
        }
      ]
    }
  }
];

export default allWork;
