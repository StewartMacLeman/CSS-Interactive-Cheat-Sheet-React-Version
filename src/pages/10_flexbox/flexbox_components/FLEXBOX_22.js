import React from "react";
import styles from "../Flexbox.module.css";

const FLEXBOX_22 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.flexboxChange_22;
  const genHelper = styles.flexboxGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    display: flex;
    align-items: baseline;
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Flexbox: align-items V5</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}>
        <div style={{fontSize: "1.2rem", width: "5.5rem"}}>_1.2rem_</div>
        <div style={{fontSize: "1.7rem", width: "8rem"}}>_1.7rem_</div>
        <div style={{fontSize: "1rem", width: "5rem"}}>_1rem_</div>
      </div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default FLEXBOX_22;
