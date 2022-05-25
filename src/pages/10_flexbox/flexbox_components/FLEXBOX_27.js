import React from "react";
import styles from "../Flexbox.module.css";

const FLEXBOX_27 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.flexboxChange_27;
  const genHelper = styles.flexboxGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Flexbox: align-content V5</h3>

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

export default FLEXBOX_27;
