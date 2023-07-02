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
  - [Difference between "react-dom" and "react-router-dom"](#difference-between-react-dom-and-react-router-dom)
    - [Add React Router](#add-react-router)
    - [Folder Structure](#folder-structure)
    - [Basic Usage](#basic-usage)
    - [Example Explained](#example-explained)
    - [Pages / Components](#pages--components)
    - [Outlet component](#outlet-component)

# React Router

## What is React Router ?

React Router is a popular routing library for React applications that enables navigation and routing between different components or pages. It allows you to create single-page applications with multiple views or pages without requiring a full page reload.

Because `create-react-app` i.e _CRA_ doesn't include page routing, we need to install a router dependency. React Router is the most popular one.

## Difference between "react-dom" and "react-router-dom"

- react-dom
  This package provides the entry point to the DOM-specific methods for React, such as rendering React components into the DOM. It includes the ReactDOM.render() method used to mount React components in a specified DOM element.

- react-router-dom:
  This package provides the routing functionality for React applications. It is specifically designed for web applications using React and provides components like BrowserRouter, Switch, Route, and Link that enable declarative routing and navigation within your application.

React-dom is responsible for rendering React components into the DOM, while react-router-dom focuses on handling the routing and navigation aspects of a React application.

### Add React Router

To add React Router in your application, run this in the terminal from the root directory of the application:

```bash
npm i -D react-router-dom
```

### Folder Structure

To create an application with multiple page routes, let's first start with the file structure. Within the src folder, we'll create a folder named pages with several files:

```bash
src\pages\:

Layout.js
Home.js
Blogs.js
Contact.js
NoPage.js
```

Each file will contain a very basic React component.

### Basic Usage

Now we will use our Router in our index.js file.

-> Example
Use React Router to route to pages based on URL:

```jsx
//app.js:

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

### Example Explained

We wrap our content first with `<BrowserRouter>`.

Then we define our `<Routes>`. An application can have multiple `<Routes>`. Our basic example only uses one.

`<Route>`s can be nested. The first `<Route>` has a path of / and renders the Layout component.

The nested `<Route>`s inherit and add to the parent route. So the blogs path is combined with the parent and becomes _/blogs_.

The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.

Setting the path to \* will act as a catch-all for any undefined URLs. This is great for a 404 error page.

### Pages / Components

The Layout component has `<Outlet>` and `<Link>` elements.

The `<Outlet>` renders the current route selected.

`<Link>` is used to set the URL and keep track of browsing history.

Anytime we link to an internal path, we will use `<Link>` instead of `<a href="">`.

The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.

```jsx
//Layout.js:

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
```

### Outlet component

In the given code, the `<Outlet />` component is part of the React Router package (react-router-dom). It is a placeholder component that serves as the target for rendering child components based on the current route.

The `<Outlet />` component is typically used within a parent component that defines the overall layout or structure of your application. It acts as a container where the content of different routes will be rendered.

In the provided code snippet, the `<Outlet />` component is used to indicate the location where the content of the current route should be rendered. When a specific route matches the URL, the corresponding component defined in the route configuration will be rendered inside the `<Outlet />` component.

For example, if the route is /blogs, the component associated with that route will be rendered inside the `<Outlet />` component, replacing any existing content.

Overall, the `<Outlet />` component plays a crucial role in React Router by dynamically rendering the appropriate content based on the current route, providing a way to build complex layouts and nested routes in your application.

```jsx
//Home.js:

const Home = () => {
  return <h1>Home</h1>;
};

export default Home;
```

```jsx
//Blogs.js:

const Blogs = () => {
  return <h1>Blog Articles</h1>;
};

export default Blogs;
```

```jsx
//Contact.js:

const Contact = () => {
  return <h1>Contact Me</h1>;
};

export default Contact;
```

```jsx
//NoPage.js:

const NoPage = () => {
  return <h1>404</h1>;
};

export default NoPage;
```
