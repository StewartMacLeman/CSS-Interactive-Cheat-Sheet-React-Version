import React from "react";

const HomeText = () => {

    return (
      <div className="homePage">
        <h2 className="homeH2">What is this app about?</h2>
          <p>This is an interactive CSS cheat-sheet; to be used as a quick refresher on various topics.</p>
        <h2 className="homeH2">How to use this app?</h2>
          <ul>
            <li>Select a topic from the drop-down navigation section.</li>
            <li>Scroll down to reveal the code examples.</li>
            <li>Click the Add-the-CSS buttons to reveal the result of each code example.</li>
          </ul>
        <h2 className="homeH2">Try the demo below!</h2>
      </div>
    );
};

export default HomeText;
