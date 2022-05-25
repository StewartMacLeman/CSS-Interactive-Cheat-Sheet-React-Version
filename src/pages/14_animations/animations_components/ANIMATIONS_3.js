import React from "react";
import styles from "../Animations.module.css";

const ANIMATIONS_3 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.animationChange_3;
  const genHelper = styles.animationsGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `@keyframes colour_size_change_2 {
    from {
          }
    to   {background-color: darkgreen;
          width: 12rem;
          }
  }
  div div {
    animation-name: colour_size_change_2;
    animation-duration: 5s;
  }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Animations: animation-name &amp; animation-duration V3</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}>
        <div>A Div!</div>
      </div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default ANIMATIONS_3;
