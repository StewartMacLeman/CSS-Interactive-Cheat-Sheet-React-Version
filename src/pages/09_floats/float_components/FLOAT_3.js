import React from "react";
import styles from "../Float.module.css";

const FLOAT_3 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.floatChange_3;
  const genHelper = styles.floatsGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div div {
    float: right;
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Float: right V1</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}>
        <div></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default FLOAT_3;
