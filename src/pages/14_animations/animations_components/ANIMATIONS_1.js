import React from "react";
import styles from "../Animations.module.css";

const ANIMATIONS_1 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.animationChange_1;
  const genHelper = styles.animationsGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `@keyframes colour_change {
    from {background-color: linen;}
    to {background-color: darkgreen;}
  }
  .div div {
    animation-name: colour_change;
    animation-duration: 5s;
  }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Animations: animation-name &amp; animation-duration V1</h3>

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

export default ANIMATIONS_1;
