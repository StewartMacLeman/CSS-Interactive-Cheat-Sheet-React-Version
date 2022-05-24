import React from "react";
import styles from "../Gradients.module.css";

const GRADIENTS_6 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.gradientsChange_6;
  const genHelper = styles.gradGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    background-image: 
    linear-gradient(to bottom left, darkgreen, palegreen);
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Gradients: linear-gradient(direction, col-1, col-2) V4</h3>

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

export default GRADIENTS_6;
