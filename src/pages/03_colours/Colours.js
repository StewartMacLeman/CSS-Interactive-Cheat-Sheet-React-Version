import React from "react";
import COLOURS_1 from "./colour_components/COLOURS_1";
import COLOURS_2 from "./colour_components/COLOURS_2";
import COLOURS_3 from "./colour_components/COLOURS_3";
import COLOURS_4 from "./colour_components/COLOURS_4";
import COLOURS_5 from "./colour_components/COLOURS_5";
import COLOURS_6 from "./colour_components/COLOURS_6";
import COLOURS_7 from "./colour_components/COLOURS_7";
import COLOURS_8 from "./colour_components/COLOURS_8";
import COLOURS_9 from "./colour_components/COLOURS_9";
import COLOURS_10 from "./colour_components/COLOURS_10";
import COLOURS_11 from "./colour_components/COLOURS_11";
import COLOURS_12 from "./colour_components/COLOURS_12";
import COLOURS_13 from "./colour_components/COLOURS_13";
import COLOURS_14 from "./colour_components/COLOURS_14";
import COLOURS_15 from "./colour_components/COLOURS_15";

const Colours = ({ toggleClasses, buttonUpdate}) => {
  return (
      <main className="main">
          <COLOURS_1 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <COLOURS_2 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <COLOURS_3 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <COLOURS_4 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <COLOURS_5 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <COLOURS_6 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <COLOURS_7 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <COLOURS_8 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <COLOURS_9 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <COLOURS_10 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <COLOURS_11 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <COLOURS_12 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <COLOURS_13 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <COLOURS_14 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <COLOURS_15 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
      </main>

  )
}

export default Colours;