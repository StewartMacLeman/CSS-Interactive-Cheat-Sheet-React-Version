import React from "react";
import styles from "../BackgroundImgs.module.css";

const BG_IMAGES_1 = ({ toggleClasses, buttonUpdate }) => {
  // -------------------------------------
  const addedClass = styles.backgroundChange_1;
  const genHelper = styles.bgImgGenHelper;
  const switchUpdates = (e) => {
    buttonUpdate(e);
    toggleClasses(e, addedClass);
  };
  // -------------------------------------
  const cssCode = `div {
    background-image:
     url(../images/Travels_NZ.JPG);
    }`;
  // -------------------------------------

  return (
    <div className="cssTopicCont">
      <h3>Background Images: url(file-path)</h3>

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

export default BG_IMAGES_1;
