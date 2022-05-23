import React from "react";
import styles from "../Text.module.css";

const TEXT_17 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.textChange_17;
  const helperClass = styles.textChange_17_Helper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `p {
    white-space: nowrap;
  }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Text: white-space</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <p className={helperClass}>Lorem ipsum dolor sit amet...</p>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default TEXT_17;
