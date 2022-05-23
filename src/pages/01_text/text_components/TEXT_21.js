import React from "react";
import styles from "../Text.module.css";

const TEXT_21 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.textChange_21;
  const helperClass = styles.textChange_21_Helper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `p {
    word-wrap: break-word;
  }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Text: word-wrap</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <p className={helperClass}><b>Loremipsumdolorsitametconsecteturadipisicingelitsed</b> do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi...</p>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default TEXT_21;
