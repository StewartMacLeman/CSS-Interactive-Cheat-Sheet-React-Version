import React from "react";
import POSITION_1 from "./position_components/POSITION_1";
import POSITION_2 from "./position_components/POSITION_2";
import POSITION_3 from "./position_components/POSITION_3";
import POSITION_4 from "./position_components/POSITION_4";
import POSITION_5 from "./position_components/POSITION_5";
import POSITION_6 from "./position_components/POSITION_6";
import POSITION_7 from "./position_components/POSITION_7";
import POSITION_8 from "./position_components/POSITION_8";

const PositionProperty = ({toggleClasses, buttonUpdate}) => {
  return (
    <main className="main">
      <POSITION_1 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
      <POSITION_2 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
      <POSITION_3 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
      <POSITION_4 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
      <POSITION_5 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
      <POSITION_6 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
      <POSITION_7 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
      <POSITION_8 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
    </main>

  )
}

export default PositionProperty;