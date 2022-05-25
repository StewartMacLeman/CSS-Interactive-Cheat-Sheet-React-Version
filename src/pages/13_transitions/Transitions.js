import React from "react";
import TRANSITIONS_1 from "./transitions_components/TRANSITIONS_1";
import TRANSITIONS_2 from "./transitions_components/TRANSITIONS_2";
import TRANSITIONS_3 from "./transitions_components/TRANSITIONS_3";
import TRANSITIONS_4 from "./transitions_components/TRANSITIONS_4";
import TRANSITIONS_5 from "./transitions_components/TRANSITIONS_5";
import TRANSITIONS_6 from "./transitions_components/TRANSITIONS_6";
import TRANSITIONS_7 from "./transitions_components/TRANSITIONS_7";
import TRANSITIONS_8 from "./transitions_components/TRANSITIONS_8";
import TRANSITIONS_9 from "./transitions_components/TRANSITIONS_9";
import TRANSITIONS_10 from "./transitions_components/TRANSITIONS_10";
import TRANSITIONS_11 from "./transitions_components/TRANSITIONS_11";
import TRANSITIONS_12 from "./transitions_components/TRANSITIONS_12";
import TRANSITIONS_13 from "./transitions_components/TRANSITIONS_13";
import TRANSITIONS_14 from "./transitions_components/TRANSITIONS_14";

const Transitions = ({toggleClasses, buttonUpdate}) => {
  return (
      <main className="main">
        <TRANSITIONS_1 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <TRANSITIONS_2 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <TRANSITIONS_3 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <TRANSITIONS_4 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <TRANSITIONS_5 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <TRANSITIONS_6 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <TRANSITIONS_7 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <TRANSITIONS_8 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <TRANSITIONS_9 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <TRANSITIONS_10 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <TRANSITIONS_11 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <TRANSITIONS_12 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <TRANSITIONS_13 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <TRANSITIONS_14 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
      </main>

  )
}

export default Transitions;