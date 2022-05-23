import React from "react";
import styles from "../Selectors.module.css";

const SELECTORS_4 = ({ buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.selectorChange_4;
  const genHelper = styles.selGenHelper;

  const toggleClasses = (e, toggleClass) => {
    let changeElement =
      e.target.previousElementSibling.previousElementSibling
        .previousElementSibling;
    changeElement.classList.toggle(`${toggleClass}`);
  };

  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div + p {
    color: tomato;
    font-weight: bold;
    font-style: italic;
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Selectors: Combinators - Adjacent Sibling (+)</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}>
        <p>A paragraph, in a div!</p>
        <p>A paragraph, in a div!</p>
      </div>
      <p>
        A paragraph, <b>not</b> in a div!
      </p>
      <p>
        A paragraph, <b>not</b> in a div!
      </p>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default SELECTORS_4;
