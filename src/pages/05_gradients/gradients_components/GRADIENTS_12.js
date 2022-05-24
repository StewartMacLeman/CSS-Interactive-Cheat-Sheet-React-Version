import React from "react";
import styles from "../Gradients.module.css";

const GRADIENTS_12 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.gradientsChange_12;
  const genHelper = styles.gradGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    background-image: 
    linear-gradient(to right, 
      darkgreen, palegreen 10%, linen 40%);
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Gradients: linear-gradient(direction, col-1, col-2...) V2</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}></div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default GRADIENTS_12;
