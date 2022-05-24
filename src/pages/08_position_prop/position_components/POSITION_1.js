import React from "react";
import styles from "../Position.module.css";

const POSITION_1 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.positionChange_1;
  const genHelper = styles.positionGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div div {
    position: static;
    top: 4rem;
    left: 6rem;
   }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>The Position Property: static</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}>
        <div></div>
      </div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default POSITION_1;
