import React from "react";
import styles from "../Selectors.module.css";

const SELECTORS_11 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.selectorChange_11;
  const genHelper = styles.selGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div p::before {
    content: "***";
    color: tomato;
    font-weight: bold;
    font-style: italic;
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Selectors: Pseudo-elements (::before)</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}>
          <p>A paragraph, in a div!</p>
          <p>A paragraph, in a div!</p>
          <p>A paragraph, in a div!</p>
      </div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default SELECTORS_11;
