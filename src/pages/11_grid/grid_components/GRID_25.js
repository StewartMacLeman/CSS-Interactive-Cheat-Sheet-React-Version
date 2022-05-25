import React from "react";
import styles from "../Grid.module.css";

const GRID_25 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const divOne = styles.div_1;
  const divTwo = styles.div_2;
  const addedClass = styles.gridChange_25;
  const genHelper = styles.gridGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `// HTML --------------------------------
  <div> <-----Parent div.
    <div class="div_1">1</div> <-child div.
    <div class="div_2">2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </div>

  // CSS --------------------------------
  div {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 0.5rem;
    padding: 0.15rem;
   }
   // Container children.----------------
   .div_1 { grid-column: 1 / 4; }
   .div_2 { grid-row: 2 / 4; }
   `;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Grid: grid-column &amp; grid-row</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}>
        <div className={divOne}>1</div>
        <div className={divTwo}>2</div>
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

export default GRID_25;
