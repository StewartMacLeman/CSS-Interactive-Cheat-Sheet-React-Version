import React from "react";
import styles from "../Display.module.css";

const DISPLAY_6 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.displayChange_6;
  const genHelper = styles.displayGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div span {
    visibility: hidden;
        }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>The Visibility Property: hidden</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}>
        <div className="div">A div!</div>
        <div className="div">A div!</div>
        <span className="span">A Span!</span><span className="span">A Span!</span><span className="span">A Span!</span>
        <div className="div">A div!</div>
        <div className="div">A div!</div>
      </div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default DISPLAY_6;
