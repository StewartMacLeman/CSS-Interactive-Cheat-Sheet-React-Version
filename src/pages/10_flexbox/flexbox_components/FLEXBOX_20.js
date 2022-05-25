import React from "react";
import styles from "../Flexbox.module.css";

const FLEXBOX_20 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.flexboxChange_20;
  const genHelper = styles.flexboxGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    display: flex;
    align-items: flex-end;
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Flexbox: align-items V3</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}>
        <div style={{height: "1.75rem"}}>1</div>
        <div style={{height: "3.75rem"}}>2</div>
        <div style={{height: "2.75rem"}}>3</div>
      </div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default FLEXBOX_20;
