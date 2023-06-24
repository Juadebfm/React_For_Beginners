<div align="center">
  <h1> React JS Class: Components </h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/juadebade/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Juadeb1">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/Juadebfm?style=social">
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/Juadeb/" target="_blank">Juadeb Adebowale</a><br>
<small> June, 2023</small>
</sub>

</div>

- [Components](#components)
  - [Class Components](#class-components)
  - [Functional Components](#functional-components)
  - [Key Differences](#key-differences)
  - [How To Use Components](#how-to-use-components)
    - [Components inside components](#components-inside-components)

# Components

A React component is a small, reusable code, which is responsible for one part of the application UI. A React application is an aggregation of components. React can help us to build reusable components. The following diagram shows different components. All the components have different border colors. In React we assemble different components together to create an application. We use JavaScript functions or classes to make components. If we use a function, the component will be a functional component, but if we use a class, the component will be a class-based component. Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
`Components are like functions that return HTML elements.`
Components come in two types, Class components and Function components, in this class we will concentrate on Function components. But to understand the difference let's explain it...

## Class Components

Class components are the older way of creating components in React. They are defined as JavaScript classes that extend the React.Component class. Here's an example of a class component:

```jsx
import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.name}!</h1>;
  }
}

export default Welcome;
```

In this example, Welcome is a class component that extends the React.Component class. It has a render() method that returns the JSX (JavaScript XML) representing the component's UI. Class components have access to the component lifecycle methods, such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. They can also have their own component state using `this.state`.

## Functional Components

Functional components are the newer and simpler way of creating components in React. They are defined as JavaScript functions. Here's an example of a functional component:

```jsx
import React from "react";

function Welcome() {
  return <h1>Hello, {name}!</h1>;
}

export default Welcome;
```

In this example, Welcome is a functional component defined as a JavaScript function. It receives the props object as an argument and returns the JSX representing the component's UI. Functional components are primarily used for presentational purposes and don't have access to component lifecycle methods or state management. However, with the introduction of React hooks, functional components can now manage state and have access to lifecycle functionalities using hooks like `useState`, `useEffect`, and others.

## Key Differences

- Syntax: Class components use the class syntax and extend React.Component, while functional components are defined as JavaScript functions.
- Lifecycle Methods: Class components have access to lifecycle methods like `componentDidMount`, `componentDidUpdate`, etc., while functional components can use hooks to achieve similar functionality.
- State Management: Class components can have their own state using `this.state`, while functional components can use hooks like `useState` to manage state.
- Simplicity: Functional components are generally simpler and easier to read and write compared to class components.

In recent versions of React, functional components have become the preferred way of writing components due to their simplicity and the introduction of hooks. However, class components are still supported and widely used in existing codebases.

## How To Use Components

Components in React should be added within the appropriate parent components or containers. This is typically done in the render() or return statement of the parent component.

In React, components are reusable building blocks that encapsulate a specific piece of UI and its logic. They can be composed together to create complex UI structures.

Here's an example of adding components within a parent component:

```jsx
Copy code
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
```

In this example, we have an App component that serves as the root component of our application. It includes three child components: `Header`, `MainContent`, and `Footer`. Each child component represents a different section of the application's UI.

By adding components within the return statement of the parent component, they will be rendered and displayed on the page when the parent component is rendered.

It's important to organize your components in a logical structure and determine the appropriate hierarchy based on the UI requirements. Components can also pass data called `(props)` to their child components to customize their behavior or appearance.

Remember to import the component files (`Header`, `MainContent`, `Footer` in the example) and ensure they are located in the correct directory relative to the parent component.

By properly adding components within their parent components, you can create modular and reusable UI structures in your React application.

### Components inside components

We can refer to components inside other components:

Example
Use the Car component inside the Garage component:

```js
function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />);
```
