import React from "react";
import DISPLAY_1 from "./display_components/DISPLAY_1";
import DISPLAY_2 from "./display_components/DISPLAY_2";
import DISPLAY_3 from "./display_components/DISPLAY_3";
import DISPLAY_4 from "./display_components/DISPLAY_4";
import DISPLAY_5 from "./display_components/DISPLAY_5";
import DISPLAY_6 from "./display_components/DISPLAY_6";

const DisplayProperty = ({toggleClasses, buttonUpdate}) => {
  return (
      <main className="main">
        <DISPLAY_1 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <DISPLAY_2 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <DISPLAY_3 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <DISPLAY_4 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <DISPLAY_5 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <DISPLAY_6 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
      </main>

  )
}

export default DisplayProperty;