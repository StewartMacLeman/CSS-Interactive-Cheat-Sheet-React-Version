import React from "react";
import styles from "../Colours.module.css";

const COLOURS_4 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.colourChange_4;
  const genHelper = styles.colGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    background-color: rgb(255, 0, 0);
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Colours: Red - rgb(red, green, blue)</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}></div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default COLOURS_4;
