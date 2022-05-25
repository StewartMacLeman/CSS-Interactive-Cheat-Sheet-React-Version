import React from "react";
import styles from "../Grid.module.css";

const GRID_10 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.gridChange_10;
  const genHelper = styles.gridGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: .75rem 1.5rem;
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Grid: grid-gap V2</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default GRID_10;
