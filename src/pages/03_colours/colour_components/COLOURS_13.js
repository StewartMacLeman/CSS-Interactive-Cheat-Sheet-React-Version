import React from "react";
import styles from "../Colours.module.css";

const COLOURS_13 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.colourChange_13;
  const genHelper = styles.colGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    background-color: hsla(0, 100%, 50%, 0.25);
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Colours: Red - hsla(hue, saturation, lightness, alpha) V2</h3>

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

export default COLOURS_13;
