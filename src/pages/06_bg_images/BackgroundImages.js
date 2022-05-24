import React from "react";
import BG_IMAGES_1 from "./bg_image_components/BG_IMAGES_1";
import BG_IMAGES_2 from "./bg_image_components/BG_IMAGES_2";
import BG_IMAGES_3 from "./bg_image_components/BG_IMAGES_3";
import BG_IMAGES_4 from "./bg_image_components/BG_IMAGES_4";
import BG_IMAGES_5 from "./bg_image_components/BG_IMAGES_5";
import BG_IMAGES_6 from "./bg_image_components/BG_IMAGES_6";
import BG_IMAGES_7 from "./bg_image_components/BG_IMAGES_7";
import BG_IMAGES_8 from "./bg_image_components/BG_IMAGES_8";
import BG_IMAGES_9 from "./bg_image_components/BG_IMAGES_9";
import BG_IMAGES_10 from "./bg_image_components/BG_IMAGES_10";
import BG_IMAGES_11 from "./bg_image_components/BG_IMAGES_11";

const BackgroundImages = ({toggleClasses, buttonUpdate}) => {
  return (
      <main className="main">
        <BG_IMAGES_1 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <BG_IMAGES_2 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <BG_IMAGES_3 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <BG_IMAGES_4 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <BG_IMAGES_5 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <BG_IMAGES_6 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <BG_IMAGES_7 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <BG_IMAGES_8 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <BG_IMAGES_9 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <BG_IMAGES_10 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
        <BG_IMAGES_11 toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />
      </main>

  )
}

export default BackgroundImages;