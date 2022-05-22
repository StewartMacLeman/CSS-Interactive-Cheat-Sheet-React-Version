import React from "react";
import TEXT_1 from "./text_components/TEXT_1";

const Text = ({showOutcome}) => {
  return (
    <main className="main">
      <TEXT_1 showOutcome={showOutcome} />
    </main>
  );
};

export default Text;
