import React from "react";
import styles from "../Colours.module.css";

const COLOURS_8 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.colourChange_8;
  const genHelper = styles.colGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    background-color: hsl(0, 75%, 50%);
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Colours: Red - hsl(hue, saturation, lightness) V2</h3>

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

export default COLOURS_8;
