import React from "react";
import styles from "../Float.module.css";

const FLOAT_4 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.floatChange_4;
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
      <h3>Float: right V2</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default FLOAT_4;
