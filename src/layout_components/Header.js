import React, {useState} from "react";
import Navigation from "./Navigation";

const Header = () => {

  const [pageTitle, setPageTitle] = useState("Home");

  const getTitle = (e) => {
    let itemClicked = e.target;
    let title = itemClicked.textContent;
    setPageTitle(title);
  };


  const showNavigation = (e) => {
    let nextElement = e.target.nextElementSibling;
    nextElement.classList.toggle("hide");

    let button = e.target;
    let buttonText = e.target.textContent;
    let hide = "Hide Nav";
    let show = "Show Nav";

    if (buttonText === "Show Nav") {
      button.textContent = hide;
    } else if (buttonText === "Hide Nav") {
      button.textContent = show;
    }
  };

  return (
    <header className="header">
      <h1>CSS Cheat-Sheet: {pageTitle}</h1>
      <button type="button" onClick={showNavigation}>
        Show Nav
      </button>
      <Navigation getTitle={getTitle}/>
    </header>
  );
};

export default Header;
