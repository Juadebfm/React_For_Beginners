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

- [React Hooks Simplified](#react-hooks-simplified)
  - [History Of React Hooks](#history-of-react-hooks)
  - [Benefits Of React Hooks](#benefits-of-react-hooks)
  - [USESTATE HOOK](#usestate-hook)
    - [Array Destructuring](#array-destructuring)

# React Hooks Simplified

Starting out with react's syntaxes and functionalities can sometimes seem daunting, because it appears as if there is a lot of magic going on. However, once you get the hang of it and begin to understand them in small bits, it is easier. In addition to making your life easier as a developer, these functionalities will also make your code more usable, readable, sharable, and easier to manage. We used to use class components before hooks. The components seemed to be doing their jobs, but over time they got bigger, more complex, and we couldn't break them down into smaller pieces. It was important to make our code more usable, simpler, and remove this need for bloated components that couldn't be broken down into smaller pieces.

## History Of React Hooks

React Hooks were introduced in _React version 16.8_, which was released on _February 6, 2019_. The introduction of Hooks marked a significant change in how state and side effects were managed in React functional components.

Before Hooks, stateful logic and side effects could only be implemented in class components using lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. This approach sometimes led to complex and hard-to-maintain code, especially when dealing with shared state and code reuse.

The motivation behind introducing Hooks was to provide a simpler and more efficient way of managing state and side effects in functional components. Hooks allow developers to write reusable logic that can be easily shared across components, resulting in cleaner and more readable code.

## Benefits Of React Hooks

Some key goals of React Hooks were:

- Enabling the use of stateful logic in functional components without the need for class components.
- Simplifying the reuse of code logic between components.
- Making it easier to understand and test components by separating concerns.
- Reducing the need for complex lifecycle methods.

With the introduction of Hooks, developers can now use built-in Hooks like `useState`, `useEffect`, `useContext`, and many others to manage state, perform side effects, handle context, and more, all within functional components. These Hooks provide a consistent and intuitive API that can be easily understood and adopted by developers.

React Hooks have gained widespread adoption and popularity among the React community due to their simplicity, reusability, and improved developer experience. They have revolutionized how developers approach state management and side effects in React applications, making it easier to build robust and scalable UI components.

## USESTATE HOOK

Before moving on to useState, lets revisit destructuring...

### Array Destructuring

[Reference from Javascript_for_beginners repo](https://github.com/Juadebfm/JavaScript_For_Beginners/tree/destructuringandspreading)

Array destructuring is a way to get individual items from an array of items, and save those individuals items as seperate components. Now let's see this in action:

```js
//Array
let veggies = [parsley, onion, carrot];

const [v1, v2, v3] = veggies;

console.log(v1); // parsley
console.log(v2); // onion
console.log(v3); // carrot
```

However, to destructure an object, you have to destruture the property of an object using that exacts property's name as the name of the destructured variable, this makes objects a lot stricter with regards to what you can name your variable unlike in arrays where you can use any name.

**for this reason, react uses the array data structure for the useState hook as array data structure is used to return value.**

```jsx
import { useState } from "react";

export default function App() {
  const restaurantName = useState("Lemon");
  console.log(restaurantName);
  return null
}
```
