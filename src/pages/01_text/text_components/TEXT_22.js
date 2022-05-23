import React from "react";
import styles from "../Text.module.css";

const TEXT_22 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.textChange_22;
  const helperClass = styles.textChange_22_Helper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `p {
    writing-mode: vertical-rl;
  }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Text: writing-mode V1</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <p className={helperClass}>Sample Text!</p>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default TEXT_22;
