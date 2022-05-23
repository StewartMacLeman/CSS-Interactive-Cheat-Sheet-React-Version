import React from "react";
import styles from "../Selectors.module.css";

const SELECTORS_2 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.selectorChange_2;
  const genHelper = styles.selGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div p span {
    color: tomato;
    font-weight: bold;
    font-style: italic;
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Selectors: Combinators - Descendant (space) V2</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}>
          <p>A paragraph, in a div!</p>
          <p>A paragraph, in a div!</p>
          <p>A <span>span</span>, in a paragraph!</p>
      </div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default SELECTORS_2;
