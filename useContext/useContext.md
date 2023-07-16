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

- [React useContext Hook](#react-usecontext-hook)
  - [React Context](#react-context)
    - [Basic Usage](#basic-usage)
    - [The Problem](#the-problem)
    - [The Solution](#the-solution)

# React useContext Hook

The useContext hook was introduced in React 16.8 as a way to simplify state management and component communication. It was designed to address the inconvenience of prop drilling, where props need to be passed through multiple levels of components.

**Syntax**
To use the useContext hook, you need to import it from the React library:

```jsx
import React, { useContext } from 'react';
```

The useContext hook takes a context object as its argument and returns the current value from the provided context:

```jsx
const value = useContext(MyContext);
```

## React Context

React Context is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

### Basic Usage

Let's say you have a user context that stores information about the current user:

```jsx
const UserContext = React.createContext();

// In a higher-level component or App.js
<UserContext.Provider value={{ username: 'John', loggedIn: true }}>
  <App />
</UserContext.Provider>


//To access the user context in a lower-level component, use the useContext hook:


const UserInfo = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <p>Username: {user.username}</p>
      <p>Logged In: {user.loggedIn ? 'Yes' : 'No'}</p>
    </div>
  );
};
```

### The Problem

State should be held by the highest parent component in the stack that requires access to the state. To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state. To do this without Context, we will need to pass the state as "props" through each nested component. This is called `prop drilling`.

```jsx
//Passing "props" through nested components:

import { useState } from "react";
import ReactDOM from "react-dom/client";

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component1 />);
```

Even though components 2-4 did not need the state, they had to pass the state along so that it could reach component 5.

### The Solution

The solution is to create context.

**Create Context**

To create context, you must Import `createContext` and initialize it:

```jsx
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();
```

Next we'll use the Context Provider to wrap the tree of components that need the state Context.

**Wrap child components in the Context Provider and supply the state value.**

```jsx
function Component1() {
  const [user, setUser] = useState("Initial State");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}
```

Now, all components in this tree will have access to the user Context.

**Use the useContext Hook**

In order to use the Context in a child component, we need to access it using the useContext Hook.

**First, include the useContext in the import statement:**

import { useState, createContext, useContext } from "react";
Then you can access the user Context in all components:

```jsx
function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
```

Here is the full example using React Context:

```jsx
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Initial State");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component1 />);
```
