import React from "react";
import styles from "../Transitions.module.css";

const TRANSITIONS_1 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.transitionChange_1;
  const genHelper = styles.transitionsGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div div {
    width: 12rem;
    transition: 2s;
   }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Transitions: duration V1</h3>

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

export default TRANSITIONS_1;
