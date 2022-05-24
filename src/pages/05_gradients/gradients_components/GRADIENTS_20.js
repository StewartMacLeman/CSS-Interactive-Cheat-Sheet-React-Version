import React from "react";
import styles from "../Gradients.module.css";

const GRADIENTS_20 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.gradientsChange_20;
  const genHelper = styles.gradGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    background-image: 
    repeating-radial-gradient(darkgreen,
       palegreen 10%, linen 20%);
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Gradients: repeating-radial-gradient()</h3>

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

export default GRADIENTS_20;
