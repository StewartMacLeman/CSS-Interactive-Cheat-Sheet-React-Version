import React from "react";
import styles from "../Text.module.css";

const TEXT_14 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.textChange_14;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `p {
    letter-spacing: 4px;
  }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Text: letter-spacing</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <p>Sample Text!</p>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default TEXT_14;
