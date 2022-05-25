import React from "react";
import ANIMATIONS_1 from "./animations_components/ANIMATIONS_1";
import ANIMATIONS_2 from "./animations_components/ANIMATIONS_2";
import ANIMATIONS_3 from "./animations_components/ANIMATIONS_3";
import ANIMATIONS_4 from "./animations_components/ANIMATIONS_4";
import ANIMATIONS_5 from "./animations_components/ANIMATIONS_5";
import ANIMATIONS_6 from "./animations_components/ANIMATIONS_6";
import ANIMATIONS_7 from "./animations_components/ANIMATIONS_7";
import ANIMATIONS_8 from "./animations_components/ANIMATIONS_8";
import ANIMATIONS_9 from "./animations_components/ANIMATIONS_9";
import ANIMATIONS_10 from "./animations_components/ANIMATIONS_10";

const Animations = ({toggleClasses, buttonUpdate}) => {
  return (
      <main className="main">
        <ANIMATIONS_1 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <ANIMATIONS_2 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <ANIMATIONS_3 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <ANIMATIONS_4 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <ANIMATIONS_5 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <ANIMATIONS_6 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <ANIMATIONS_7 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <ANIMATIONS_8 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <ANIMATIONS_9 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <ANIMATIONS_10 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
      </main>

  )
}

export default Animations;