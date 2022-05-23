import React from "react";
import styles from "../BordersShadows.module.css";

const BORDERS_SHADOWS_2 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.bordersChange_2;
  const genHelper = styles.bordShadGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    border-style: dotted;
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Borders &amp; Shadows: border-style</h3>

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

export default BORDERS_SHADOWS_2;
