import React from "react";
import styles from "../BackgroundImgs.module.css";

const BG_IMAGES_11 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.backgroundChange_11;
  const genHelper = styles.bgImgGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    background: palegreen;
    background-image: 
    url(../images/travels_NZ.JPG),
    url(../images/travels_NZ_2.JPG);
    background-size: 9rem 6.075rem, 9rem 6.075rem;
    background-repeat: no-repeat, repeat-y;
    background-position: top left, bottom right;
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Background Images: Multiple Images V2</h3>

      <div className="codeExampleCont">
        <pre>
          <code>{cssCode}</code>
        </pre>
      </div>

      <div className={genHelper}></div>

      <button type="button" onClick={switchUpdates}>
        Add the CSS
      </button>
    </div>
  );
};

export default BG_IMAGES_11;
