import React from "react";
import styles from "../BordersShadows.module.css";

const BORDERS_SHADOWS_16 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.bordersChange_16;
  const genHelper = styles.bordShadGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    box-shadow: 
    8px 3px 3px darkgrey, 
    20px 7px 7px lightgrey;
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Borders &amp; Shadows: box-shadow V4</h3>

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

export default BORDERS_SHADOWS_16;
