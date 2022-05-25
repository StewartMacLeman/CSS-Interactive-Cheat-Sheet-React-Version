import React from "react";
import styles from "../Transforms.module.css";

const TRANSFORMS_1 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.transformChange_1;
  const genHelper = styles.transformsGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div div {
    transform: translate(6rem, 4rem);
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Transforms: translate(x,y) V1</h3>

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

export default TRANSFORMS_1;
