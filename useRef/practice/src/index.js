import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const App = () => {
  const [myNum, setMyNum] = useState(0);
  const [isPaddingApplied, setIsPaddingApplied] = useState(false);

  const inputOne = useRef();
  const inputTwo = useRef();
  const inputThree = useRef();
  const inputFour = useRef();

  const getNumBox = () => {
    console.log("Hello");
    console.log(inputOne.current);
    inputOne.current.style.width = "400px";
  };

  const getTextBox = () => {
    console.log("World");
    console.log(inputTwo.current);
  };

  const focusOnInputThree = () => {
    inputThree.current.focus();
  };

  const togglePadding = () => {
    setIsPaddingApplied((prevState) => !prevState); // Toggle the state value
  };

  // Style object to handle the padding based on the toggle state
  const inputFourStyle = {
    padding: isPaddingApplied ? "10px" : "5px",
  };

  return (
    <>
      <h2>Test</h2>
      <input
        ref={inputOne}
        type="number"
        value={myNum}
        style={{ width: "100px" }}
        onChange={(e) => setMyNum(e.target.value)}
      />
      <input
        ref={inputTwo}
        type="text"
        value={myNum}
        onChange={(e) => setMyNum(e.target.value)}
      />
      <input ref={inputThree} type="text" placeholder="Focus on me!" />
      <input
        ref={inputFour}
        type="text"
        placeholder="Toggle my padding!"
        style={inputFourStyle} // Apply the padding based on the toggle state
      />
      <h3>Value is : {myNum}</h3>
      <button onClick={() => getNumBox()}>Naira</button>
      <button onClick={() => getTextBox()}>Dollar</button>
      <button onClick={() => focusOnInputThree()}>Focus on Input Three</button>
      <button onClick={() => togglePadding()}>
        Toggle Padding of Input Four
      </button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
