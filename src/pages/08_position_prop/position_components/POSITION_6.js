import React from "react";
import styles from "../Position.module.css";

const POSITION_6 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.positionChange_6;
  const helperClass = styles.posCh_6_helper;
  const genHelper = styles.positionGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    position: relative;
  }
  div div {
    position: absolute;
    top: 0rem;
    left: 20%;
   }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>The Position Property: absolute</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={`${genHelper} + ${helperClass}`}>
        <div></div>
        <p>A paragraph!</p>
        <p>A paragraph!</p>
        <p>A paragraph!</p>
        <p>A paragraph!</p>
      </div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default POSITION_6;
