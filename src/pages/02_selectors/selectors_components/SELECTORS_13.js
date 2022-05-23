import React from "react";
import styles from "../Selectors.module.css";

const SELECTORS_13 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.selectorChange_13;
  const genHelper = styles.selGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div p[title] {
    color: tomato;
    font-weight: bold;
    font-style: italic;
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Selectors: Attributes [attribute]</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}>
        <p title="TopTip">&lt;p title="TopTip"&gt;<span>Sample Text!</span>&lt;/p&gt;</p>
        <p title="TipTop">&lt;p title="TipTop"&gt;<span>Sample Text!</span>&lt;/p&gt;</p>
        <p>&lt;p&gt;<span>Sample Text!</span>&lt;/p&gt;</p>
      </div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default SELECTORS_13;
