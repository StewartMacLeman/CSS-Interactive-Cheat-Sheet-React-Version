import React from "react";
import styles from "../Text.module.css";

const TEXT_5 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.textChange_5;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `p {
    text-indent: 2rem;
  }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Text: text-indent</h3>

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

export default TEXT_5;
