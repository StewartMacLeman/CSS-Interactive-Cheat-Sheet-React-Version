import React from "react";
import styles from "../Gradients.module.css";

const GRADIENTS_14 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.gradientsChange_14;
  const genHelper = styles.gradGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    background-image: 
    repeating-linear-gradient(to right,
      darkgreen, palegreen 10%, linen 20%);
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Gradients: repeating-linear-gradient(direction, colours...)</h3>

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

export default GRADIENTS_14;
