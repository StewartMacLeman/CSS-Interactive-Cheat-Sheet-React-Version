import React from "react";
import styles from "../Transitions.module.css";

const TRANSITIONS_9 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.transitionChange_9;
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
    transition-timing-function: ease-in-out;
   }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Transitions: transition-timing-function V5</h3>

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

export default TRANSITIONS_9;
