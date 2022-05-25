import React from "react";
import styles from "../Transitions.module.css";

const TRANSITIONS_4 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.transitionChange_4;
  const genHelper = styles.transitionsGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div div {
    width: 12rem;
    height: 8rem;
    transition: 3s;
   }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Transitions: durations V2</h3>

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

export default TRANSITIONS_4;
