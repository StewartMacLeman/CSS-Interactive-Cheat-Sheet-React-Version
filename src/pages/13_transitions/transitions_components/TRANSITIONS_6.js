import React from "react";
import styles from "../Transitions.module.css";

const TRANSITIONS_6 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.transitionChange_6;
  const genHelper = styles.transitionsGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div div {
    width: 12rem;
    height: 8rem;
    transition: 5s;
    transition-timing-function: ease;
   }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Transitions: transition-timing-function V2</h3>

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

export default TRANSITIONS_6;
