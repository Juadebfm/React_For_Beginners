<div align="center">
  <h1> React Class: React Hooks</h1>
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

- [React Hooks](#react-hooks)
  - [What is a Hook?](#what-is-a-hook)
  - [Hook Rules](#hook-rules)
  - [useState](#usestate)
  - [Basic Usage](#basic-usage)
  - [Managing Complex State](#managing-complex-state)
  - [Functional Updates](#functional-updates)
  - [Multiple State Variables](#multiple-state-variables)

# React Hooks

Hooks were added to React in version 16.8. Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed. Although Hooks generally replace class components, there are no plans to remove classes from React.

## What is a Hook?

Hooks allow us to "hook" into React features such as state and lifecycle methods.

Example:
Here is an example of a Hook. Don't worry if it doesn't make sense. We will go into more detail in the next section.

```js
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
      <button type="button" onClick={() => setColor("pink")}>
        Pink
      </button>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FavoriteColor />);
```

You must import Hooks from react. Here we are using the useState Hook to keep track of the application state. State generally refers to application data or properties that need to be tracked.

## Hook Rules

There are 3 rules for hooks:

- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional
- Note: Hooks will not work in React class components.

## useState

The useState Hook allows us to add state to functional components. It takes an initial state value as a parameter and returns an array with two elements: the current state value and a function to update the state value.

## Basic Usage

Here's a simple example of using useState to manage a counter:

```js
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

In this example, we initialize the count state variable to _0_ using _useState(0)_. The setCount function is used to update the value of count when the button is clicked. Each time the button is clicked, the count value is incremented by 1, and the component is re-rendered with the updated value.

## Managing Complex State

useState can also be used to manage more complex state objects. Here's an example of managing a user object with multiple properties:

```js
import React, { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({ name: "", age: 0, email: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
    </div>
  );
}
```

In this example, we initialize the user state variable as an object with empty values. The handleChange function updates the specific property of the user object based on the input field's name attribute. We use the spread operator to merge the existing state with the updated property.

## Functional Updates

useState also supports functional updates, which allow you to update the state based on the previous state value. This is useful when the new state depends on the previous state. Here's an example:

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

In this example, the increment function uses the functional form of setCount and receives the previous count value as prevCount. This ensures that the increment operation is based on the correct previous count, even if there are multiple state updates happening concurrently.

## Multiple State Variables

You can also use multiple useState calls to manage different state variables independently within a component. Here's an example:

```js
import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

In this example, each state variable (name, email, password) is managed separately with its own useState call. Updating one state variable doesn't affect the others, allowing for independent management of different form fields.

By leveraging the useState Hook, you can easily introduce and manage state in functional components, making your code more concise and easier to understand. React Hooks have greatly simplified state management in functional components and have become an essential part of modern React development.
