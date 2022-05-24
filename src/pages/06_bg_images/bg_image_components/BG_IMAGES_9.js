import React from "react";
import styles from "../BackgroundImgs.module.css";

const BG_IMAGES_9 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.backgroundChange_9;
  const genHelper = styles.bgImgGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    background-image: 
    url(../images/travels_NZ.JPG);
    background-size: 9rem 6.075rem;
    background-repeat: no-repeat;
    background-position: bottom right;
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Background Images: background-position V2</h3>

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

export default BG_IMAGES_9;
