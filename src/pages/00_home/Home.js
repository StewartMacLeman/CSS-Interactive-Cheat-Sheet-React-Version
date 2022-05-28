import React from "react";
import HomeText from "./text_demo/HomeText";
import Demo from "./text_demo/Demo";

const Home = ({ toggleClasses, buttonUpdate}) => {
  return (
      <main className="main">
          <HomeText />
          <Demo toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
      </main>

  )
}

export default Home;