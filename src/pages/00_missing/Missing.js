import React from "react";
import { Link } from "react-router-dom";

const Missing = ({ clearH2 }) => {
  return (
    // the missing class has been removed!
    <main className="main">
      <h1>Sorry, can't find this path!</h1>
      <button onClick={clearH2}>
        <Link to="/">Back to Home!</Link>
      </button>
    </main>
  );
};

export default Missing;
