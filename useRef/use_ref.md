<div align="center">
  <h1> React Class: React Hooks - UseRef</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/juadebade/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Juadeb1">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/Juadeb1?style=social">
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/juadebade/" target="_blank">Juadeb Gabriel</a><br>
<small> July 2023</small>
</sub>

</div>

- [useRef Hook](#useref-hook)
  - [Difference between useRef and useState](#difference-between-useref-and-usestate)
  - [useRef Hooks Does Not Cause Re-renders](#useref-hooks-does-not-cause-re-renders)
  - [Accessing DOM Elements](#accessing-dom-elements)
    - [Here's what each part does](#heres-what-each-part-does)
  - [Tracking State Changes](#tracking-state-changes)
    - [Now, let's explain the code](#now-lets-explain-the-code)

# useRef Hook

When you build a React application, the UI often needs to update and re-render as the user interacts with it or as data changes. However, sometimes you need to store certain values that shouldn't trigger a re-render. This is where the useRef Hook comes in. It allows you to create a reference to a value that remains the same across renders, preserving its state even when the component re-renders due to other changes.

In React, when you use the useState Hook to manage state, updating the state causes a re-render of the component. However, there are situations where you need to update a value without triggering a re-render. For example, you might want to keep track of how many times a component has been rendered, or you might need to store a temporary value that doesn't affect the UI. With useRef, you can store such values, and updating them won't cause the component to re-render.

Apart from storing values, useRef can also be used to interact with the DOM directly. In React, when you want to access a DOM element, you often use getElementById or querySelector from vanilla JavaScript, which is not the recommended way in React. Instead, you can use useRef to get a reference to a DOM element rendered by a React component, and then you can directly interact with that element without going through the usual DOM queries.

To summarize, useRef is a powerful tool in React that allows you to keep track of values that shouldn't trigger re-renders and provides a way to interact with DOM elements directly in a more React-friendly manner. It's a handy tool for managing state that doesn't affect the UI and for working with the DOM in React applications.

## Difference between useRef and useState

| Tables                       |                                                                                        useRef                                                                                        |                                                                                                                                 useState |
| ---------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------: |
| Purpose:                     |            Used to hold mutable values or references to DOM elements/other components that persist across renders. It does not trigger re-renders when the value changes.            | Used to manage stateful values in functional components. It allows you to store and update values that trigger re-renders when modified. |
| Re-renders:                  |                  Changing the current property of a useRef object doesn't trigger a re-render since it's considered to be outside the component's rendering cycle.                   |                                        When the state value changes via setState, the component re-renders to reflect the updated state. |
| Mutability:                  | The value held by useRef can be mutated directly without triggering re-renders. However, it's recommended to use useState for managing state changes that should trigger re-renders. | State values are immutable. When you update state with setState, a new state object is created, and React handles the rendering for you. |
| Preservation across renders: |                                   The current value of a useRef object persists across re-renders without being affected by the re-render process.                                   |                                               State values are preserved across re-renders, and each render gets the latest state value. |

| Typical Use Cases:

| For holding onto DOM elements or values that need to be retained between renders but don't need to trigger a re-render. | For managing state that affects the component's rendering and requires reactivity. |

```jsx
import React, { useState, useRef } from "react";

function ExampleComponent() {
  // useState
  const [count, setCount] = useState(0); // State variable 'count' and its setter function 'setCount'

  // useRef
  const inputRef = useRef(null); // Ref to hold a reference to an input element

  const handleButtonClick = () => {
    setCount((prevCount) => prevCount + 1); // Update the state using 'useState'
    inputRef.current.focus(); // Access and modify the DOM element using 'useRef'
  };

  return (
    <div>
      <p>Count: {count}</p>
      <input ref={inputRef} />
      <button onClick={handleButtonClick}>Increment Count</button>
    </div>
  );
}
```

## useRef Hooks Does Not Cause Re-renders

If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the _useRef_ Hook.

```jsx
// Import the required React hooks and the ReactDOM client.
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

// Create a functional component named App.
function App() {
  // State to hold the input value in the component.
  const [inputValue, setInputValue] = useState("");

  // Create a mutable value using useRef to track the number of renders.
  const count = useRef(0);

  // Create an effect that runs on every render.
  useEffect(() => {
    // Increase the render count by 1 each time the component renders.
    count.current = count.current + 1;
  });

  // Render the component's UI.
  return (
    <>
      {/* An input element that is controlled by the inputValue state. */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* Display the current render count using the mutable value (ref). */}
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

// Create a root using ReactDOM.createRoot and render the App component into it.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

_useRef()_ only returns one item. It returns an Object called `current`. When we initialize useRef we set the initial value: _useRef(0)_. It's like doing this: _const count = {current: 0}_. We can access the count by using _count.current_.

## Accessing DOM Elements

In general, we want to let React handle all DOM manipulation. But there are some instances where useRef can be used without causing issues. In React, we can add a ref attribute to an element to access it directly in the DOM.

```jsx
// Import the necessary React hook and the ReactDOM client.
import { useRef } from "react";
import ReactDOM from "react-dom/client";

// Create a functional component named App.
function App() {
  // Create a reference (ref) using useRef to store a reference to the input element.
  const inputElement = useRef();

  // Create a function named focusInput.
  // This function will be called when the "Focus Input" button is clicked.
  const focusInput = () => {
    // Call the "focus" method on the inputElement ref.
    // This will set the focus to the input element, making it active for user input.
    inputElement.current.focus();
  };

  // Render the component's UI.
  return (
    <>
      {/* An input element with type="text". */}
      {/* We attach the inputElement ref to this input element using the "ref" attribute. */}
      <input type="text" ref={inputElement} />

      {/* A button that, when clicked, will call the focusInput function. */}
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

// Create a root using ReactDOM.createRoot and render the App component into it.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

### Here's what each part does

- The code creates a special input box. You can think of it as a box where you can write things like you do on a computer or a tablet.

- It also creates a button called "Focus Input." When you press this button, something special happens.

- When you press the "Focus Input" button, the magic happens! The input box becomes super smart and ready to listen to whatever you want to write. It's like when you click on the input box with your mouse to start typing, but this time, it happens automatically when you press the button!

- The "Focus Input" button is like casting a magic spell on the input box. It tells the input box, "Hey, get ready for writing!" So, when you click the button, it activates the input box for you.

- The code uses something called "refs" to do this magic. A ref is like a special note or label that the code puts on the input box. With this note, the code can find and control the input box easily.

- So, when you click the "Focus Input" button, the code uses the special note (ref) to find the input box and makes it active for writing without you doing anything else!

## Tracking State Changes

The useRef Hook can also be used to keep track of previous state values. This is because we are able to persist useRef values between renders.

```jsx
// Import the necessary React hooks and the ReactDOM client.
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

// Create a functional component named App.
function App() {
  // Create a state named inputValue and a function setInputValue to update it.
  const [inputValue, setInputValue] = useState("");

  // Create a mutable ref named previousInputValue and initialize it to an empty string.
  const previousInputValue = useRef("");

  // Create an effect that runs whenever the inputValue state changes.
  useEffect(() => {
    // Inside the effect, update the previousInputValue ref to store the previous inputValue.
    // This way, we can keep track of the previous value whenever the input value changes.
    previousInputValue.current = inputValue;
  }, [inputValue]);

  // Render the component's UI.
  return (
    <>
      {/* An input element with type="text". */}
      {/* We set the value of the input to the inputValue state and update it with the onChange event. */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* Display the current value from the inputValue state. */}
      <h2>Current Value: {inputValue}</h2>

      {/* Display the previous value from the previousInputValue ref. */}
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

// Create a root using ReactDOM.createRoot and render the App component into it.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

### Now, let's explain the code

Imagine you have a special box on a webpage where you can write stuff, like a chatbox or a place to type your name. This code helps you with that!

- There's an input box on the webpage where you can type things.

- Next to the box, you have two notes to remember the things you write: one note for what you just wrote (current value), and another note for what you wrote before (previous value).

- Whenever you write something in the box, the first note (current value) updates to show what you typed now.

- But the second note (previous value) is cool! It remembers what you typed before, even if you erase it or change it to something else.

- So, when you write something new in the box, the second note quickly remembers what you wrote before and keeps it safe.

- And this magic happens because the code uses something called "refs" for these notes. These refs help the code remember and keep track of what you write in the box.

- Every time you change what's in the box, the code updates the notes, so you can always see what you wrote before.
