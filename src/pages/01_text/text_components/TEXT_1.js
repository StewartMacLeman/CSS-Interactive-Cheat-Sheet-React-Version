import React from "react";

const TEXT_1 = ({showOutcome}) => {
const jsCode =
`let name = "Bobby";

 function whatIsTheType(variable){
   return typeof variable;
 }

 let outcome = whatIsTheType(name);`;
// -------------------------------------
let nameString = "Bobby";

function whatIsTheType(variable) {
  return typeof variable;
};

let outcome = whatIsTheType(nameString);
// -------------------------------------

    return (
      <div className="jsTopicCont">
        <h3>typeof Operator: Strings</h3>

        <div className="codeExampleCont">
          <pre><code>{jsCode}</code></pre>
        </div>

        <button type="button" onClick={showOutcome}>Show Outcome</button>

        <div className="hide">
          <div className="codeOutcomeCont">
            <div><code>{`outcome: ${outcome}`}</code></div>
          </div>
        </div>
      </div>
    );
};

export default TEXT_1;
