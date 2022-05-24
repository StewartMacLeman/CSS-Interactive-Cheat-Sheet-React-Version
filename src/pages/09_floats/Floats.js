import React from "react";
import FLOAT_1 from "./float_components/FLOAT_1";
import FLOAT_2 from "./float_components/FLOAT_2";
import FLOAT_3 from "./float_components/FLOAT_3";
import FLOAT_4 from "./float_components/FLOAT_4";
import FLOAT_5 from "./float_components/FLOAT_5";
import FLOAT_6 from "./float_components/FLOAT_6";

const Floats = ({toggleClasses, buttonUpdate}) => {
  return (
      <main className="main">
          <FLOAT_1 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <FLOAT_2 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <FLOAT_3 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <FLOAT_4 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <FLOAT_5 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
          <FLOAT_6 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
      </main>

  )
}

export default Floats;