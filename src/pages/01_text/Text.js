import React from "react";
import TEXT_1 from "./text_components/TEXT_1";

const Text = ({toggleClasses, buttonUpdate}) => {
  return (
    <main className="main">
    <TEXT_1 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
    </main>
  );
};

export default Text;
