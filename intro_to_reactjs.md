<div align="center">
  <h1> React JS: Getting Started React</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/juadebade/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Juadeb1">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/Juadebfm?style=social">
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/juadebade/" target="_blank">Adebowale Julius</a><br>
<small> June, 2023</small>
</sub>

</div>

- [Getting Started React](#getting-started-react)
  - [1. What is React?](#1-what-is-react)
  - [2. JSX](#2-jsx)
    - [JSX Element](#jsx-element)
    - [Commenting a JSX element](#commenting-a-jsx-element)
    - [Rendering a JSX Element](#rendering-a-jsx-element)
    - [Style and className in JSX](#style-and-classname-in-jsx)

## Getting Started React

This section covers prerequisites to get started with React. You should have a good understanding of the following technologies:

- HTML
- CSS
- JavaScript

If you have the skills mentioned above, you will enjoy doing React. The React JS Class contains everything you need to know about react. In every section, it has some exercises and mini-projects, and it is recommended to work on them. This React JS Class will help you learn the latest version of React and the old version, step by step. The topics are broken down into simple bits, where each day contains several topics with easy-to-understand explanations, real-world examples and many hands-on exercises.
This Class is designed for beginners and professionals who want to build a web application using React and JavaScript.

### 1. What is React?

React is a JavaScript library for building a reusable user interface(UI). It was initially released on May 29, 2013. The current version is 18.2.0 and it is stable. React was created by Facebook. React makes creating UI components very easy. The official React documentation can be found [here](https://react.dev/learn). When we work with React we do not interact directly with the DOM. React has its own way to handle the DOM(Document Object Model) manipulation. React uses its virtual DOM to make new changes and it updates only the element, that needs changing. Do not directly interact with DOM when you build a React Application and leave the DOM manipulation job for the React virtual DOM. In this Class, we will develop 10-15 web applications using React. A web application, or a website, is made of buttons, links, forms with different input fields, header, footer, sections, articles, texts, images, audios, videos and boxes with different shapes. We use react to make a reusable UI components of a website.

To summarize:

- React was released in May 2013
- React was created by Facebook
- React is a JavaScript library for building user interfaces
- React is used to build single page applications - An application which has only one HTML page.
- React allows us to create reusable UI components
- React latest release is 18.2.0
- [React versions](https://reactjs.org/versions/)
- React official documentation can be found [here](https://react.dev/learn)
- React creates a VIRTUAL DOM in memory.

Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

- React only changes what needs to be changed!
- React finds out what changes have been made, and changes only what needs to be changed.

### 2. JSX

JSX stands for JavaScript XML. JSX allows us to write HTML elements with JavaScript code. An HTML element has an opening and closing tags, content, and attribute in the opening tag. However, some HTML elements may not have content and a closing tag - they are self closing elements. To create HTML elements in React we do not use the _createElement()_ instead we just use JSX elements. Therefore, JSX makes it easier to write and add HTML elements in React. JSX will be converted to JavaScript on browser using a transpiler - [babel.js](https://babeljs.io/). Babel is a library which transpiles JSX to pure JavaScript and latest JavaScript to older version. See the JSX code below.

```js
// JSX syntax
// we don't need to use quotes with JSX

const jsxElement = <h1>I am a JSX element</h1>;
const welcome = <h1>Welcome to React JS Class</h1>;
const data = <small>June 23, 2023</small>;
```

The above strange looking code seems like JavaScript and it seems like , but it is not JavaScript and it seems like HTML but not completely an HTML element. It is a mix of JavaScript and an HTML elements. JSX can allow us to use HTML in JavaScript. The HTML element in the JSX above is _h1_ and _small_.

#### JSX Element

As you have seen in the example above, JSX has a JavaScript and HTML like syntax. JSX element could be a single HTML element or many HTML elements wrapped in a parent HTML element.

This JSX element has only one HTML element which is _h1_.

```js
const jsxElement = <h1>I am a JSX element</h1>; // JS with HTML
```

Let's make more JSX elements by declaring a new variable named title and content inside _h2_.

```js
const title = <h2>Getting Started React</h2>;
```

Let us add a subtitles and other contents to this JSX element by adding additional HTML elements. Every HTML element should be wrapped by an outer HTML element to create a valid JSX element. The name title variable also should be changed to header because our JSX element is containing almost all of the header of the application.

```js
const header = (
  <header>
    <h1>Welcome to React JS</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </header>
);
```

Let us keep adding more elements. Additional HTML elements to display the author name and year.

```js
const header = (
  <header>
    <h1>Welcome to React JS</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Adebowale Julius</p>
    <small>June 23, 2023</small>
  </header>
);
```

As you can see the _header_ element is a parent element for all the inner HTML elements and JSX must be wrapped by an outer parent element. Without the _header_ HTML element or other parent HTML element the above JSX is invalid.

#### Commenting a JSX element

We comment codes for different reasons and it is also good to know how to comment out JSX elements in React.

```js
{
  /*
 <header>
    <h1>Welcome to React JS</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Adebowale Julius</p>
    <small>June 23, 2023</small>
  </header>

*/
}
```

#### Rendering a JSX Element

To render a JSX element to HTML document, we should first create an index HTML. The index.html is the only HTML file you will have in any React Application. That is why we say that every React Application is a single page application. Let us create an index.html file. We can get started with React in two ways - either by using CDN or create-react-app. The create-react-app creates a React project boilerplate outbox and because of that, many people do have a hard time to understand how React works. In order to make things clear for absolute beginners I would like to start with a CDN. We use CDN only in this section and we will use the create-reap-app in the rest of the Class and I also recommend you to use only create-react-app all the time.

#### Style and className in JSX

To add style to a JSX element we use inline style or className. We inject the style object using {}. Every CSS property becomes a key and every CSS property value becomes a value for the the object. For instance, in the example below, border is a key and '2px solid orange' is a value, color is a key and 'black' is a value, fontSize is a key and '18px' is a value. All two word CSS properties will change to camelCase when we use them as key in the CSS object in React or JavaScript.

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Roboto:300,400,500&display=swap"
      rel="stylesheet"
    />

    <title>React JS Class</title>
    <style>
      /* == General style === */
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html,
      body {
        height: 100%;
        line-height: 1.5;
        font-family: "Montserrat";
        font-weight: 300;
        color: black;
      }

      .root {
        min-height: 100%;
        position: relative;
      }

      .header-wrapper,
      .main-wrapper,
      .footer-wrapper {
        width: 85%;
        margin: auto;
      }

      .header-wrapper,
      .main-wrapper {
        padding: 10px;
        margin: 2px auto;
      }

      h1 {
        font-size: 70px;
        font-weight: 300;
      }

      h2,
      h3 {
        font-weight: 300;
      }

      header {
        background-color: #61dbfb;
        padding: 10px;
      }

      main {
        padding: 10px;
        padding-bottom: 60px;
        /* Height of the footer */
      }

      ul {
        margin-left: 15px;
      }

      ul li {
        list-style: none;
      }

      footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        /* Height of the footer */
        background: #6cf;
      }

      .footer-wrapper {
        font-weight: 400;
        text-align: center;
        line-height: 60px;
      }
    </style>
  </head>

  <body>
    <div class="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // To get the root element from the HTML document
      const rootElement = document.querySelector(".root");
      // JSX element, header
      const welcome = "Welcome to React JS Class";
      const title = "Getting Started React";
      const subtitle = "JavaScript Library";
      const author = {
        firstName: "Adebowale",
        lastName: "Julius",
      };
      const date = "June 23, 2023";

      // JSX element, header
      const header = (
        <header>
          <div className="header-wrapper">
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
              Instructor: {author.firstName} {author.lastName}
            </p>
            <small>Date: {date}</small>
          </div>
        </header>
      );

      const numOne = 3;
      const numTwo = 2;

      const result = (
        <p>
          {numOne} + {numTwo} = {numOne + numTwo}
        </p>
      );

      const yearBorn = 1820;
      const currentYear = 2023;
      const age = currentYear - yearBorn;
      const personAge = (
        <p>
          {" "}
          {author.firstName} {author.lastName} is {age} years old
        </p>
      );

      // JSX element, main
      const techs = ["HTML", "CSS", "JavaScript"];
      const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);

      // JSX element, main
      const main = (
        <main>
          <div className="main-wrapper">
            <p>
              Prerequisite to get started{" "}
              <strong>
                <em>react.js</em>
              </strong>
              :
            </p>
            <ul>{techsFormatted}</ul>
            {result}
            {personAge}
          </div>
        </main>
      );

      const copyRight = "Copyright 2023";

      // JSX element, footer
      const footer = (
        <footer>
          <div className="footer-wrapper">
            <p>{copyRight}</p>
          </div>
        </footer>
      );

      // JSX element, app
      const app = (
        <div className="app">
          {header}
          {main}
          {footer}
        </div>
      );

      // we render the JSX element using the ReactDOM package
      ReactDOM.render(app, rootElement);
    </script>
  </body>
</html>
```