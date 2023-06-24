<div align="center">
  <h1> React JS: Installation and Set-Up </h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/juadebade/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Juadeb1">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/Juadeb?style=social">
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/juadebade/" target="_blank">Juadeb Adebowale</a><br>
<small> June, 2023</small>
</sub>

</div>
</div>

- [Setting Up](#setting-up)
  - [Node](#node)
  - [Module](#module)
  - [Package](#package)
  - [Node Package Manager(NPM)](#node-package-managernpm)
  - [Visual Studio Code](#visual-studio-code)
  - [Browser](#browser)
  - [Visual Studio Extensions](#visual-studio-extensions)
  - [Create React App](#create-react-app)
- [Your first React App](#your-first-react-app)
  - [React Boilerplate](#react-boilerplate)
  - [Update To New "Root" API \& React 18](#update-to-new-root-api--react-18)
    - [Client Rendering](#client-rendering)
    - [Server Rendering](#server-rendering)
  - [ES 6](#es-6)

# Setting Up

In the previous section, we learned about JSX and we accessed the React and ReactDOM package using CDN. However, in real projects instead of CDN you will use the create-react-app package to generate a React project starter(boilerplate). The initial _create-react-app_ was released on Jul 22, 2016. Before this time, developers used to configure webpack with a JavaScript module bundler, babel and all the necessary packages manually and this used to take half an hour or maybe more. Now, create-react-app will take care of everything and you will be in charge of only developing the product, instead of spending too much time configuring and setting up projects. Before we start using different tools, let's have a brief introduction to all the tools we are going to use in this challenge. You do not have to understand everything, but I will try to give a very short introduction to some of the tools and technologies that we use when we work with React.

## Node

Node is a JavaScript runtime environment that allows JavaScript to run on the server. Node was created in 2009. Node has played a great role for the growth of JavaScript. The React application starts by default at localhost 3000. The create-react-app has configured a node server for the React Application. That is why we need node and node modules. We will see create-react-app soon.

If you do not have node, install it. Install [node.js](https://nodejs.org/en/).

After downloading double click and install

We can check if node is installed on our local machine, by opening our device terminal or command prompt, and writing the following command:

```sh
Juadeb $ node -v
v18.16.1
```

## Module

A single or multiple functions, that can be exported and imported when needed, can be included in a project.
In React we do not use link to access modules or packages, instead we import the module. Let's see how to import and export a module or modules:

```js
// math.js
export const addTwo = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const subtract = (a, b) => a - b;

export default (function doSomeMath() {
  return {
    addTwo,
    multiply,
    subtract,
  };
})();
```

Now let's import the _math.js_ modules to a different file:

```js
// index.js
// to import the doSomeMath from the math.js with or without extension
import doSomeMath from "./math.js";

// to import the other modules
// since these modules were not exported as default we have to desctructure
import { addTwo, multiply, subtract } from "./math.js";

import * as everything from "./math.js"; // to import everything remaining
console.log(addTwo(5, 5));
console.log(doSomeMath.addTwo(5, 5));
console.log(everything);
```

After this, when you see _import React from 'react'_ or _import ReactDOM from 'react-dom'_ you will not be surprised.

## Package

A Package is a module or a collection of modules. For instance, React, ReactDOM are packages.

## Node Package Manager(NPM)

NPM was created in 2010. You do not need to install NPM separately - when you install node you will have also NPM. NPM is a default package manager for Node.js. It allows users to consume and distribute JavaScript modules that are available in the registry. NPM allows to create packages, use packages and distribute packages. NMP also played quite a big role in the growth of JavaScript. Currently, there is more than 350,000 packages in the NPM registry. Let's see the create-react-app on NPM registry. The number of downloads show the popularity of the package.

## Visual Studio Code

We will use Visual Studio Code as a code editor. [Download](https://code.visualstudio.com) and install it if you do not have one yet.

## Browser

We will use Google Chrome, Chrome, Brave or Edge.

## Visual Studio Extensions

You may need to install these extensions from Visual Studio Code

- Prettier
- ESLint
- Bracket Pair Colorizer
- ES7 React/Redux/GraphQL/React-Native snippets

## Create React App

To create a react project you can use one of the following ways. Let's assume you installed node. Open the command line interface (CLI), git bash or terminal on Mac or Linux. Then run the following command. I am using git bash.

```sh
Juadeb@OAAJAR MINGW64 ~/Desktop
$ npx create-react-app name-of-your-project
```

If you do not like to write npx every time you create a project you may install create-react-app package globally in your computer using the following command.

```sh
Juadeb@OAAJAR MINGW64 ~/Desktop
$ npm install -g create-react-app
```

After you installed create-react-app, you create a React application as follows:

```sh
Juadeb@OAAJAR MINGW64 ~/Desktop
$ create-react-app name-of-project
```

# Your first React App

```sh
Juadeb@OAAJAR MINGW64 ~
\$ cd Desktop/
```

```sh
Juadeb@OAAJAR MINGW64 ~/Desktop
\$ npx create-react-app client
```

```sh
Juadeb@OAAJAR MINGW64 ~/Desktop
\$ cd client/
```

```sh
Juadeb@OAAJAR MINGW64 ~/Desktop/client (master)
\$ npm start
```

Now your React app should run at localhost 3000. Go to the App.js and modify the content by writing some text, you will see the latest changes on the browser.
To stop the server, press Ctr + C in the CLI.

## React Boilerplate

Let's see the React boilerplate, which has been created by create-react-app. Whenever you create a new project, you run create-react-app and name of the project.

In the following React boilerplate, there are three folders: node_modules, public and src. In addition, there are .gitignore, README.md, package.json and yarn.lock. Some of you, instead of yarn.lock, you may have package-lock.json.

It is good to know these folders and files.

- node_modules - stores all the necessary node packages of the React applications.

- Public

  - index.html - the only HTML file we have in the entire application

  - favicon.ico - an icon file
  - manifest.json - It provides information to the browser and the operating system about how the app should behave when installed on a device or accessed as a web app.
  - other images - open graph images(open graph images are images which are visible when a link share on social media)
  - robots.txt - information, if the website allows web scraping

- src

  - App.css, index.css - are different CSS files
  - index.js - a file which allows to connect all the components with index.html
  - App.js - A file where we usually import most of the presentational components
  - serviceWorker.js: is used to add progressive web app features
  - setupTests.js - to write testing cases

- package.json- List of packages the applications uses
- .gitignore - React boilerplate comes with git initiated, and the .gitingore allows files and folders not to be pushed to GitHub
- README.md - Markdown file to write documentation
- yarn.lock or package-lock.json - a means to lock the version of the package

Now lets remove all the files, which we do not need at the moment, and leave only the files we need right now.

Now lets write code on index.js. First of, we should import React and ReactDOM. React allows us to write JSX and ReactDOM to render the JSX on the DOM. ReactDOM has a render method. Let's use all the JSX elements we created on Day 2. The ReactDOM render method takes two parameters, a JSX or a component and the root.

```js
//index.js
// importing the react and react-dom package

import React from "react";
import ReactDOM from "react-dom/client";

const myFirstElement = <h1>Hello React!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myFirstElement);
```

If your application is not running, go to your project folder and run the following command

```sh
Juadeb@OAAJAR MINGW64 ~/Desktop/client (master)
\$ npm start
```

If you do not have any bugs, your React app will be launched on the browser

## Update To New "Root" API & React 18

Upgrading an existing React application to version 18 only requires two steps. To install the latest version, from your project folder run the following from the terminal:

```sh
npm i react@latest react-dom@latest
```

In order to take advantage of React 18's concurrent features you'll need to use the new root API for client rendering. Now what is `Client Rendering`

### Client Rendering

Client rendering, also known as client-side rendering, is the default rendering approach in React. It means that the rendering process happens in the user's browser. Here's an example:

```js
//App.jsx
import React from "react";

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Welcome to my website.</p>
    </div>
  );
}

export default App;
```

In client rendering, the React components are bundled and sent to the user's browser. The browser then interprets the JavaScript code and renders the components in the DOM (Document Object Model). This allows the user to interact with the website and see the changes in real-time. Client rendering is suitable for dynamic and interactive applications.

### Server Rendering

Server rendering, also known as server-side rendering (SSR), is an alternative rendering approach in React. It means that the rendering process happens on the server before sending the HTML to the user's browser. Here's an example:

```js
// App.js
import React from "react";

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Welcome to my website.</p>
    </div>
  );
}

export default App;
```

In server rendering, the React components are rendered on the server using a server-side rendering framework like Next.js or Gatsby. The server generates the HTML with the rendered components and sends it as a complete HTML page to the user's browser. This allows the user to see the fully rendered page immediately, even before the JavaScript code loads and executes. Server rendering is beneficial for improving initial page load performance and SEO (Search Engine Optimization).

Here's an example using Next.js, a popular server-side rendering framework for React:

```jsx
// pages/index.js
import React from "react";

function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Welcome to my website.</p>
    </div>
  );
}

export default Home;
```

In Next.js, the pages directory contains the server-rendered pages. The framework handles the server rendering process and generates the complete HTML pages with the rendered React components.

To summarize, `client rendering` renders the components in the user's browser using JavaScript, while `server rendering` renders the components on the server and sends the fully rendered HTML to the user's browser. Both approaches have their benefits and are used based on specific requirements and use cases.

## ES 6

ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

Why Should I Learn ES6?
React uses ES6, and you should be familiar with some of the new features like:

- [Classes](https://www.w3schools.com/REACT/react_es6_classes.asp)
- [Arrow Functions](https://www.w3schools.com/REACT/react_es6_arrow.asp)
- [Variables](https://www.w3schools.com/REACT/react_es6_variables.asp)
- [Array Methods](https://www.w3schools.com/REACT/react_es6_array_methods.asp)
- [Destructuring](https://www.w3schools.com/REACT/react_es6_destructuring.asp)
- [Spread Operator](https://www.w3schools.com/REACT/react_es6_spread.asp)
- [Modules](https://www.w3schools.com/REACT/react_es6_modules.asp)
- [Ternary Operator](https://www.w3schools.com/REACT/react_es6_ternary.asp)
