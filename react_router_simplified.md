<div align="center">
  <h1> React class: React Router</h1>
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

- [React Router](#react-router)
  - [What is React Router ?](#what-is-react-router-)
    - [Installation](#installation)
    - [Router Component](#router-component)
    - [Link Component](#link-component)
    - [Route Parameters](#route-parameters)
    - [Switch Component:](#switch-component)

# React Router

## What is React Router ?

React Router is a popular routing library for React applications that enables navigation and routing between different components or pages. It allows you to create single-page applications with multiple views or pages without requiring a full page reload.

Key concepts and components in React Router:

### Installation

Install React Router using a package manager like npm or yarn:

```bash
npm install react-router-dom
```

### Router Component

Wrap your application with the BrowserRouter component from React Router to enable routing functionality.
This component creates a router context and provides it to all other router-related components.

```jsx
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

Use the Route component to define routes and their associated components. Each Route component renders a component when the current URL matches its defined path.

```jsx
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  );
};
```

### Link Component

Use the Link component to create links for navigating between different routes. It renders an `<a>` tag with the specified URL and ensures the page doesn't reload when clicked.

```jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
```

### Route Parameters

You can define dynamic routes by using parameters in the route path. The parameter values can be accessed in the component through the _match.params object._

```jsx
<Route path="/users/:id" component={UserDetails} />
In the UserDetails component:

jsx
Copy code
const UserDetails = ({ match }) => {
  const { id } = match.params;
  // Use the 'id' parameter value in your component
  // ...
};
```

### Switch Component:

The Switch component renders only the first matching route. This ensures that only one route is rendered at a time, preventing multiple components from rendering simultaneously.

```jsx
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
```

These are some of the key concepts and components in React Router. By utilizing these, you can create navigation, handle dynamic routes, and render different components based on the current URL in your React applications. Remember to import necessary components from 'react-router-dom' and explore the React Router documentation for more advanced features and customization options.
