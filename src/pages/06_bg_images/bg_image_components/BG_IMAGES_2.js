import React from "react";
import styles from "../BackgroundImgs.module.css";

const BG_IMAGES_2 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.backgroundChange_2;
  const genHelper = styles.bgImgGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    background-image: 
    url(../images/travels_NZ.JPG);
    background-size: 5rem 3.375rem;
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Background Images: background-size V1</h3>

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

export default BG_IMAGES_2;
