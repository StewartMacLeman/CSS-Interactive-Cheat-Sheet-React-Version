import React from "react";
import styles from "../Position.module.css";

const POSITION_8 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.positionChange_8;
  const genHelper = styles.positionGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div div {
    position: sticky;
    top: 0rem;
   }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>The Position Property: sticky V2</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}>
        <p>A paragraph!</p>
        <p>A paragraph!</p>
        <div></div>
        <p>A paragraph!</p>
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

export default POSITION_8;
