import React from "react";
import styles from "../BordersShadows.module.css";

const BORDERS_SHADOWS_13 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.bordersChange_13;
  const genHelper = styles.bordShadGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    box-shadow: 15px 5px;
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Borders &amp; Shadows: box-shadow V1</h3>

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

export default BORDERS_SHADOWS_13;
