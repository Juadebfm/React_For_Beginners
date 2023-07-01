<div align="center">
  <h1> React Class: Events</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/juadebade/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Juadeb1">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/Juadeb1?style=social">
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/juadebade/" target="_blank">Juadeb Gabriel</a><br>
<small> October, 2023</small>
</sub>

</div>

- [Events](#events)
  - [What is an event?](#what-is-an-event)
  - [General Breakdown](#general-breakdown)
    - [Adding Events](#adding-events)
    - [Passing Arguments](#passing-arguments)
    - [React Event Object](#react-event-object)

# Events

## What is an event?

An event is an action or occurrence recognized by a software. To make an event more clear let's use the daily activities we do when we use a computer such as clicking on a button, hover on an image, pressing a keyboard, scrolling the mouse wheel and etc. In this section, we will focus only some of the mouse and keyboard events. The react documentation has already a detail note about [events](https://reactjs.org/docs/handling-events.html).

Handling events in React is very similar to handling elements on DOM elements using pure JavaScript. Some of the syntax difference between handling event in React and pure JavaScript:

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.

Let's see some examples to understand event handling.

Event handling in HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>React Project</title>
  </head>
  <body>
    <button>onclick="greetPeople()">Greet People</button>
    <script>
      const greetPeople = () => {
        alert("Welcome to Pluralcode React Class");
      };
    </script>
  </body>
</html>
```

In React, it is slightly different

```js
import React from "react";
// if it is functional components
const App = () => {
  const greetPeople = () => {
    alert("Welcome to Pluralcode React Class");
  };
  return <button onClick={greetPeople}> </button>;
};
```

Another difference between HTML and React event is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default link behavior of opening a new page, you can write:

Plain HTML

```html
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

You can use the `onclick` attribute on an element to specify a JavaScript function to be executed when that element is clicked. In the example code above, the function logs a message to the console and returns false, which prevents the default behavior of the link (opening a new page).

In React, event handling is slightly different. Instead of using the onclick attribute, you use the onClick prop to assign a function to be executed when the element is clicked. The function you provide will be called with the event object as its argument.

```js
import React from "react";

const App = () => {
  const handleClick = (event) => {
    event.preventDefault();
    alert("Welcome to Pluralcode React Class");
  };

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
};

export default App;
```

In the React example above, the `handleClick` function is called when the link is clicked. It displays an alert message but doesn't prevent the default behavior of the link. To prevent the default behavior, such as opening a new page, you would need to call the `preventDefault()` method on the event object explicitly.

Event handling is a very vast topic and in react we focus on the most common event types. We may use the following mouse and keyboard events.
_onMouseMove, onMouseEnter, onMouseLeave, onMouseOut, onClick, onKeyDown, onKeyPress, onKeyUp, onCopy, onCut, onDrag, onChange,onBlur,onInput, onSubmit_

## General Breakdown

Just like HTML DOM events, React can perform actions based on user events. React has the same events as HTML: click, change, mouseover etc.

### Adding Events

React events are written in camelCase syntax: onClick instead of onclick. React event handlers are written inside curly braces:

`onClick={shoot}` instead of `onClick="shoot()"`.

```js
<button onClick={shoot}>Take the Shot!</button>
```

```js
<button onclick="shoot()">Take the Shot!</button>
```

Example

```js
//Put the shoot function inside the Football component:
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  };

  return <button onClick={shoot}>Take the shot!</button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Football />);
```

### Passing Arguments

To pass an argument to an event handler, use an arrow function.
Example:

```js
//Send "Goal!" as a parameter to the shoot function, using arrow function:

function Football() {
  const shoot = (a) => {
    alert(a);
  };

  return <button onClick={() => shoot("Goal!")}>Take the shot!</button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Football />);
```

### React Event Object

Event handlers have access to the React event that triggered the function. In our example the event is the "click" event.

Arrow Function: Sending the event object manually:

```js
function Football() {
  const shoot = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  };

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Football />);
```

This will come in handy when we look at Form in a later chapter.
