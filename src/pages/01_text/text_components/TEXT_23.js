import React from "react";
import styles from "../Text.module.css";

const TEXT_23 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.textChange_23;
  const helperClass = styles.textChange_23_Helper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `p {
    writing-mode: vertical-lr;
  }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Text: writing-mode V2</h3>

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

export default TEXT_23;
