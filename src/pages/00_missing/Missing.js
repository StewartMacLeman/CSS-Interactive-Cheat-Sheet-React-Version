import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    // the missing class has been removed!
    <main className="main missing">
      <h1>Sorry, can't find this path!</h1>
      <button>
        <Link to="/">Back to Home!</Link>
      </button>
    </main>
  );
};

export default Missing;
