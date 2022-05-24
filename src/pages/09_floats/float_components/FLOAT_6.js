import React from "react";
import styles from "../Float.module.css";

const FLOAT_6 = ({ buttonUpdate }) => {
  // -------------------------------------
  const floatClass = styles.floatLeft;
  const clearClass = styles.floatChange_6;
  const genHelper = styles.floatsGenHelper;
  const toggleClasses = (e, startClass, updateClass) => {
    let changeElement = e.target.previousElementSibling;
    changeElement.classList.toggle(`${startClass}`); 
    changeElement.classList.toggle(`${updateClass}`); 
  }
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, floatClass, clearClass);
  };
  // -------------------------------------
  const cssCode = `div div {
    clear: left;
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>The Clear Property: left</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={`${genHelper} ${floatClass}`}>
        <div></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default FLOAT_6;
