import React from "react";
import styles from "../Float.module.css";

const FLOAT_1 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.floatChange_1;
  const genHelper = styles.floatsGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div div {
    float: left;
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Float: left V1</h3>

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

export default FLOAT_1;
