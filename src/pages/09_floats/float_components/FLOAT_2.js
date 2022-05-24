import React from "react";
import styles from "../Float.module.css";

const FLOAT_2 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.floatChange_2;
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
      <h3>Float: left V2</h3>

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

export default FLOAT_2;
