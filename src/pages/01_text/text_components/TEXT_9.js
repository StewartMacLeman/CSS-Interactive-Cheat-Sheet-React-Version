import React from "react";
import styles from "../Text.module.css";

const TEXT_9 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.textChange_9;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `p {
    text-decoration: line-through;
  }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Text: text-decoration</h3>

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

export default TEXT_9;
