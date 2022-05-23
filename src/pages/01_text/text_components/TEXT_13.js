import React from "react";
import styles from "../Text.module.css";

const TEXT_13 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.textChange_13;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `p {
    text-shadow: 
    1px 0px tomato, 
    -1px 0px tomato, 
    0px 1px tomato, 
    0px -1px tomato;
  }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Text: text-shadow V4</h3>

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

export default TEXT_13;
