<div align="center">
  <h1> React Class: UseEffect</h1>
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

- [Difference Between useState and useEffect](#difference-between-usestate-and-useeffect)
  - [useState](#usestate)
  - [useEffect](#useeffect)
  - [useEffect Hooks](#useeffect-hooks)
  - [Effect Cleanup](#effect-cleanup)

# Difference Between useState and useEffect

## useState

useState is a React hook used for managing state within a functional component. It allows you to create and update state variables. Here are some key points about useState:

- Purpose: useState is used to declare and manage state variables in a functional component. State variables hold data that can change over time, causing the component to re-render.

- Syntax: useState is a function that takes an initial value as its argument and returns an array with two elements: the current state value and a function to update the state.

- Usage: To use useState, you typically destructure the returned array elements into separate variables. The first variable holds the current state value, and the second variable is a function that you can call to update the state value.

Example:

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

In this example, useState(0) initializes the count state variable with an initial value of 0. setCount is a function provided by useState to update the count value when the button is clicked. The component re-renders whenever setCount is called, reflecting the updated value of count.

## useEffect

useEffect is another React hook that allows you to perform side effects in functional components. Side effects may include fetching data, subscribing to events, manipulating the DOM, or updating other components. Here are some important points about useEffect:

- Purpose: useEffect is used to introduce side effects within a functional component. It executes the provided callback function after every render, including the initial render and subsequent re-renders.

- Syntax: useEffect is a function that takes two arguments: a callback function and an optional dependency array. The callback function contains the side effect logic, and the dependency array specifies which variables the effect depends on.

- Usage: The callback function inside useEffect is executed after the component renders. It can perform operations like fetching data, updating the DOM, subscribing/unsubscribing from events, or modifying state. The dependency array is used to control when the effect should re-run based on changes to specific variables.

Example:

```jsx
import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>Seconds: {seconds}</div>;
}
```

In this example, useEffect is used to update the seconds state variable every second. The effect sets up an interval using setInterval to increment the seconds value. The cleanup function returned from the effect is used to clear the interval when the component unmounts. 

To summarize, useState is used for managing state within a component, allowing you to create and update state variables. On the other hand, useEffect is used to handle side effects in a component, such as data fetching or DOM manipulation, and it runs after each render. Understanding the difference between useState and useEffect and their specific use cases is crucial for effectively managing state and performing side effects in React components.

## useEffect Hooks

The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.
_useEffect(<function>, <dependency>)_

Let's use a timer as an example.

```jsx
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer />);
```

But wait!! It keeps counting even though it should only count once! useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect. This is not what we want. There are several ways to control when side effects run. We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

- No dependency passed:

```jsx
useEffect(() => {
  //Runs on every render
});
```

- An empty array:

```jsx
useEffect(() => {
  //Runs only on the first render
}, []);
```

- Props or state values:

```jsx
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```

So, to fix this issue, let's only run this effect on the initial render.

```jsx
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer />);
```

Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:

```jsx
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
```

## Effect Cleanup

Some effects require cleanup to reduce memory leaks. Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed. We do this by including a return function at the end of the useEffect Hook.

Clean up the timer at the end of the useEffect Hook:

```jsx
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer />);
```

**Note: To clear the timer, we had to name it.**
