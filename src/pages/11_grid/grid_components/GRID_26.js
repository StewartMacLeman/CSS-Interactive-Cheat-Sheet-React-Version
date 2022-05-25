import React from "react";
import styles from "../Grid.module.css";

const GRID_26 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const divArea = styles.area;
  const addedClass = styles.gridChange_26;
  const genHelper = styles.gridGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `// HTML ------------------------------
  <div> <-----Parent div.
    <div>1</div> <---child div.
    <div class="area">2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
  </div>

  // CSS ------------------------------
  div {
    display: grid;
    grid-template-columns: 
    auto auto auto auto;
    grid-gap: 0.5rem;
    padding: 0.15rem;
   }
   // Container child.------------------
   .area { grid-area: 1 / 2 / 3 / 4; }
   // grid-area:
    row-start, column-start, 
    row-end, column-end.
   `;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Grid: grid-area</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}>
        <div>1</div>
        <div className={divArea}>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default GRID_26;
