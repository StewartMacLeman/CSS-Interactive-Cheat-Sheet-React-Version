import React from "react";
import styles from "../Flexbox.module.css";

const FLEXBOX_31 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.flexboxChange_31;
  const genHelper = styles.flexboxGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Flexbox: align-content &amp; justify-content V3</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}>
        <div>1</div>
      </div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default FLEXBOX_31;
