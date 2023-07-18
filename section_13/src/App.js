import React from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = React.useState(false);

  console.log("APP RUNNING"); // This will run every time the component is re-evaluated

  //a new function is created every time the component is re-evaluated
  //so React.memo() will not prevent the component from re-rendering
  //the solution is to use React.useCallback() to prevent the function from being re-created
  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };


  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>Hi I'm Zack</p>}
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
