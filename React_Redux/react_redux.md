<div align="center">
  <h1> React Class: Redux Toolkit</h1>
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

- [Refresher on key concepts in react](#refresher-on-key-concepts-in-react)
  - [Redux](#redux)
    - [Key concepts in Redux](#key-concepts-in-redux)
      - [Store](#store)
      - [Actions](#actions)
      - [Reducers](#reducers)
      - [Dispatch](#dispatch)
      - [Subscribe](#subscribe)
    - [Connecting React with Redux](#connecting-react-with-redux)
  - [Why should i use redux when i have useContext](#why-should-i-use-redux-when-i-have-usecontext)
    - [Complexity of State Management](#complexity-of-state-management)
    - [Predictability and Debugging](#predictability-and-debugging)
    - [Scalability](#scalability)
    - [Ecosystem and Community Support](#ecosystem-and-community-support)
    - [Learning Curve](#learning-curve)
    - [Lay-man explanation for redux](#lay-man-explanation-for-redux)

# Refresher on key concepts in react

- **Components:** The building blocks of React applications. Components can be simple (like a button) or complex (like a form) and can hold their own state and props (properties).
- **State:** Represents the data or information that a component needs to render and function. When the state changes, React re-renders the component to reflect the new data.
- **Props:** Short for properties, props are used to pass data from a parent component to a child component. This helps in making components reusable and configurable.

## Redux

Redux is a `predictable state container` for JavaScript applications, and it complements React very well. It helps manage the application state in a centralized manner(global state), making it easier to maintain and scale large applications.

### Key concepts in Redux

#### Store

The central place where the application state is stored. The state in Redux is represented as a single plain JavaScript object. The Redux store is a single, immutable state tree that holds the entire application state. It is the single source of truth for your application. The store is created using the _createStore_ function from the Redux library. The state in the store can only be modified by dispatching actions, making state management predictable and easier to reason about.

```jsx
import { createStore } from "redux";

// Reducer function (explained later)
const reducer = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};

// Create the store with the reducer
const store = createStore(reducer);
```

#### Actions

Plain JavaScript objects that describe what happened in the application. They are dispatched by components to trigger state changes. Actions are plain JavaScript objects that represent something that happened in your application. They contain a type property that describes the type of action and additional data if necessary. Actions are the only way to modify the state in the Redux store.

```jsx
const incrementAction = { type: "INCREMENT" };
const decrementAction = { type: "DECREMENT" };
```

#### Reducers

Pure functions that specify how the application's state changes in response to actions. They take the current state and an action as input and return a new state. **Reducers must be pure, meaning they should not modify the original state; instead, they create a new state object based on the current state and the action.**


```jsx
const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
```

#### Dispatch

A function used to send actions to the Redux store, which then triggers the state change. The dispatch function is used to send actions to the Redux store. When you dispatch an action, Redux invokes the reducer, calculates the new state, and updates the store with the new state. Components typically call dispatch when an event occurs or when asynchronous operations are completed.

```jsx
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
```

#### Subscribe

A method that allows components to listen for changes to the Redux store and update accordingly. The subscribe method allows components to listen for changes to the Redux store and be notified whenever the state changes. This is often used to trigger re-rendering of components when the state updates.

```jsx
const render = () => {
  const currentState = store.getState();
  console.log(`Current state: ${currentState}`);
};

// Subscribe the render function to the store
const unsubscribe = store.subscribe(render);

// Later, when you want to stop listening for updates:
// unsubscribe();
```

When an action is dispatched, the reducer is called, the state is updated, and all subscribed functions (like render in the example above) are notified. The components can then re-render based on the updated state.

### Connecting React with Redux

To use Redux with React, you need to install the react-redux library, which provides bindings that enable React components to interact with the Redux store. You can then use the Provider component at the top level of your application to make the store available to all components.

By connecting React with Redux, you can access the global state from any component, dispatch actions to modify the state, and keep your application's data flow organized and predictable.

## Why should i use redux when i have useContext

Using useContext and using Redux are two different approaches to managing state in your React application. Each has its own advantages and use cases, so the choice between them depends on the complexity and needs of your project.

**Here are some factors to consider when deciding whether to use Redux or useContext:**

### Complexity of State Management

If your application has a simple and straightforward state management needs, using _useContext_ might be sufficient. It allows you to create a centralized state that can be accessed by any component within a specific context.
However, as your application grows and state management becomes more complex, Redux offers a more structured and organized approach. It enforces certain patterns that make it easier to reason about and manage the state.

### Predictability and Debugging

Redux follows a strict **unidirectional** data flow, making it easier to predict how state changes propagate through the application. This predictability can be helpful when debugging and understanding how different parts of the application interact with the state.
useContext doesn't enforce any particular data flow patterns, so it might lead to more complex and less predictable state changes, especially in large applications.

### Scalability

Redux is designed to handle complex state management in large applications. It provides tools like middleware for handling asynchronous actions, time-travel debugging, and dev tools for inspecting state changes.
While useContext is suitable for simpler state management, it might become harder to maintain as your application scales and more state-related logic is introduced.

### Ecosystem and Community Support

Redux has been widely adopted and has a robust ecosystem with many useful extensions and middleware available. It has a large community, which means that you can find plenty of resources, tutorials, and community support.
While useContext is part of React itself, it doesn't have the same extensive ecosystem and community as Redux.

### Learning Curve

If you are already familiar with React, using useContext might feel more natural and require less additional learning. Redux, on the other hand, has a steeper learning curve due to its specific concepts and patterns.

### Lay-man explanation for redux

Imagine you have a magic notebook where you write down everything that you spend money on. Let's call it "`The Expenses Notebook.`" In this notebook, you write about fun things you did and bought, like eating ice cream, games, or travels.

Now, imagine you have a helper friend named "Redux" who helps you organize and keep track of all the expenses you write in your notebook. Redux is like a magical library that helps you remember and manage all the expensess you've had.

**Here's how it works:**

- The Expenses Notebook (Store):
  The expenses Notebook is where you write down everything that happens (your expensess). In Redux, we call this the "Store." It's like a special book where we keep all the important information in one place.

- Recording expensess (Actions):
  Every time you do something fun, like eating ice cream or playing games, you write it down in your expenses Notebook. In Redux, these special notes are called "Actions." An Action tells Redux about something that happened.

- The Helper Friend Redux (Reducers):
  Now, sometimes you might want to know how many times you went to the park or how many ice creams you ate. That's where your helper friend "Redux" comes in. Redux is like a clever friend who reads your expenses Notebook and counts how many times you did different things.
  Redux uses "`Reducers`" to count your expensess. A Reducer is like a special calculator that takes all the actions you wrote down and figures out how many times you spent money or did something with money.

- Remembering expensess (State):
  After Redux calculates all the expensess, it keeps the count of each activity safe and sound. We call this information the "State." So, whenever you want to know how many ice creams you ate or how many times you went to the park, Redux can tell you because it remembers everything in the State.

- Asking Redux (Dispatch):
  If you want to know the number of ice creams you ate, you can ask Redux, "Hey Redux, how many ice creams did I eat?" And Redux will look in its magical notes (the State) and tell you the answer!

- Listening to expensess (Subscribe):
  You might also have a special friend called "Subscribe" who **listens** to your expensess. Whenever you write something new in your expenses Notebook (dispatch an action), Subscribe gets excited and asks Redux what changed. Then, you and your friends can celebrate the new expenses together!
  So, that's how Redux helps you manage and remember all the fun things you do in your expenses Notebook. With Redux, you have a magic friend who keeps track of everything and helps you enjoy your expensess even more! 🎉
