import React from "react";
import styles from "../Animations.module.css";

const ANIMATIONS_9 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.animationChange_9;
  const genHelper = styles.animationsGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `@keyframes box_move {
    0%   { top: 0rem; left: 0rem; }
    25%  { top: 0rem; left: 6rem; }
    50%  { top: 4rem; left: 6rem; }
    75%  { top: 4rem; left: 0rem; }
    100% { top: 0rem; left: 0rem; }
  }
  div div {
    animation-name: box_move;
    animation-duration: 5s;
    position: relative;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Animations: animation-direction</h3>

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

export default ANIMATIONS_9;
