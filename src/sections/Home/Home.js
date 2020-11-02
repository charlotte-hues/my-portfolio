import React from "react";

import About from "../About/About";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";

const Home = props => {
  return (
    <>
      <About />
      <Work homepage />
      <Contact />
    </>
  );
};

export default Home;
