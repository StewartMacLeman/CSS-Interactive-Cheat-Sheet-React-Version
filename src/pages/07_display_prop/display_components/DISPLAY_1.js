import React from "react";
import styles from "../Display.module.css";

const DISPLAY_1 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.displayChange_1;
  const genHelper = styles.displayGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div div {
    display: inline;
        }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>The Display Property: inline</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}>
        <div>A div!</div>
        <div>A div!</div>
        <span>A Span!</span><span>A Span!</span><span>A Span!</span>
        <div>A div!</div>
        <div>A div!</div>
      </div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default DISPLAY_1;
