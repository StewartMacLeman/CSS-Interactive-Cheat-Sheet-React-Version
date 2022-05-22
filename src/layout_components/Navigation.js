import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({getTitle}) => {
const active = ({ isActive }) => isActive ? "active" : "";
  return (
    <nav className="navigation hide">
      <ul>
        <li onClick={getTitle}>
          <NavLink to="/" className={active}>Home</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="01_text" className={active}>Text</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="02_selectors" className={active}>Selectors</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="03_colours" className={active}>Colours</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="04_borders_shadows" className={active}>Borders &amp; Shadows</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="05_gradients" className={active}>Gradients</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="06_background_images" className={active}>Background Images</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="07_display_property" className={active}>The Display Property</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="08_position_property" className={active}>The Position Property</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="09_floats" className={active}>Floats</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="10_flexbox" className={active}>Flexbox</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="11_grid" className={active}>Grid</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="12_transforms" className={active}>Transforms</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="13_transitions" className={active}>Transitions</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="14_animations" className={active}>Animations</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
