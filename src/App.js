import React from "react";
import { Routes, Route } from "react-router-dom";
// ----------------------------------------
import Layout from "./layout_components/Layout";
import Home from "./pages/00_home/Home";
import Missing from "./pages/00_missing/Missing";
// ----------------------------------------
import Text from "./pages/01_text/Text";
import Selectors from "./pages/02_selectors/Selectors";
import Colours from "./pages/03_colours/Colours";
import BordersShadows from "./pages/04_borders_shadows/BordersShadows";
import Gradients from "./pages/05_gradients/Gradients";
import BackgroundImages from "./pages/06_bg_images/BackgroundImages";
import DisplayProperty from "./pages/07_display_prop/DisplayProperty";
import PositionProperty from "./pages/08_position_prop/PositionProperty";
import Floats from "./pages/09_floats/Floats";
import Flexbox from "./pages/10_flexbox/Flexbox";
import Grid from "./pages/11_grid/Grid";
import Transforms from "./pages/12_transforms/Transforms";
import Transitions from "./pages/13_transitions/Transitions";
import Animations from "./pages/14_animations/Animations";

const App = () => {
  // ----------------------------------------------
  const toggleClasses = (e, toggleClass) => {
    let changeElement = e.target.previousElementSibling;
    changeElement.classList.toggle(`${toggleClass}`);
  };
  const buttonUpdate = (e) => {
    let button = e.target;
    let buttonText = e.target.textContent;
    let removeCss = "Reset";
    let addCss = "Add the CSS";
    
    if (buttonText === "Add the CSS") {
      button.textContent = removeCss;
    } else if (buttonText === "Reset") {
      button.textContent = addCss;
    }
  };
  // ----------------------------------------------
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* ----------------------------- */}
          <Route index element={<Home />} />
          {/* ----------------------------- */}
          <Route
            path="01_text"
            element={<Text toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />}
          />
          <Route path="02_selectors" element={<Selectors toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />} />
          <Route path="03_colours" element={<Colours toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />} />
          <Route path="04_borders_shadows" element={<BordersShadows toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />} />
          <Route path="05_gradients" element={<Gradients toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />} />
          <Route path="06_background_images" element={<BackgroundImages toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />} />
          <Route path="07_display_property" element={<DisplayProperty toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />} />
          <Route path="08_position_property" element={<PositionProperty toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />} />
          <Route path="09_floats" element={<Floats toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />} />
          <Route path="10_flexbox" element={<Flexbox toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />} />
          <Route path="11_grid" element={<Grid toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />} />
          <Route path="12_transforms" element={<Transforms toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />} />
          <Route path="13_transitions" element={<Transitions toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />} />
          <Route path="14_animations" element={<Animations toggleClasses={toggleClasses} buttonUpdate={buttonUpdate} />} />
          {/* ----------------------------- */}
          <Route path="*" element={<Missing />} />
          {/* ------------------------------ */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
