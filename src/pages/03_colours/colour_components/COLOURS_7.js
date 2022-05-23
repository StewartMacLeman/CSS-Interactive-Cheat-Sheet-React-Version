import React from "react";
import styles from "../Colours.module.css";

const COLOURS_7 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.colourChange_7;
  const genHelper = styles.colGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    background-color: hsl(0, 100%, 50%);
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Colours: Red - hsl(hue, saturation, lightness) V1</h3>

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

export default COLOURS_7;
