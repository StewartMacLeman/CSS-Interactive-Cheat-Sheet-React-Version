import React from "react";
import styles from "../Transforms.module.css";

const TRANSFORMS_4 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.transformChange_4;
  const genHelper = styles.transformsGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div div {
    transform: rotate(45deg);
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Transforms: rotate(deg) V1</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}>
        <div>A Div!</div>
      </div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default TRANSFORMS_4;