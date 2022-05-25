import React from "react";
import styles from "../Animations.module.css";

const ANIMATIONS_4 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.animationChange_4;
  const genHelper = styles.animationsGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `@keyframes colour_size_change_3 {
    0%   { background-color: linen; }
    33%  { background-color: palegreen; width: 12rem; }
    66%  { background-color: darkgreen; width: 12rem; }
    100% { height: 8rem; }
  }
  div div {
    animation-name: colour_size_change_3;
    animation-duration: 9s;
  }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Animations: animation-name &amp; animation-duration V4</h3>

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

export default ANIMATIONS_4;
