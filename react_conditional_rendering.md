<div align="center">
  <h1> React Class: Conditional Rendering</h1>
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

- [Conditional Rendering](#conditional-rendering)
  - [Conditional Rendering using If and Else statement](#conditional-rendering-using-if-and-else-statement)
  - [Conditional Rendering using Ternary Operator](#conditional-rendering-using-ternary-operator)
  - [Conditional Rendering using \&\& Operator](#conditional-rendering-using--operator)

# Conditional Rendering

Conditional rendering in React allows you to control what content is displayed in your components based on certain conditions or variables. It's a powerful feature that enables you to create dynamic and interactive user interfaces. There are several ways to implement conditional rendering in React, and I'll explain a few common approaches:

## Conditional Rendering using If and Else statement

You can use a simple if statement within the render() method of your component to conditionally render content. For example:

```jsx
render() {
  if (someCondition) {
    return <div>Show this content if the condition is true.</div>;
  } else {
    return <div>Show this content if the condition is false.</div>;
  }
}
```

In this example above, the content to be rendered is determined based on the evaluation of the condition (someCondition in the example). If the condition is true, the first JSX element is returned, otherwise, the second JSX element is returned.
Now let's see an actual use case...

```jsx
import React, { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let content;
  if (isLoggedIn) {
    content = (
      <div>
        <h1>Welcome to the Dashboard!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    content = (
      <div>
        <h1>Please log in to continue</h1>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default App;
```

## Conditional Rendering using Ternary Operator

Ternary operator is an an alternative for if else statement. However, there is more use cases for ternary operator than if else statement. For example, use can use ternary operator inside styles, className or many places in a component than regular if else statement. The ternary operator _(condition ? expression1 : expression2)_ can be used for concise conditional rendering. It's especially useful when you have a simple condition with two possible outcomes.

```js
render() {
  return (
    <div>
      {someCondition ? (
        <p>Show this content if the condition is true.</p>
      ) : (
        <p>Show this content if the condition is false.</p>
      )}
    </div>
  );
}
```

In the above JSX expression after the `?` is rendered if the condition is true, and the JSX expression after the `:` is rendered if the condition is false.
Now let's see an actual use case...

```js
import React, { useState } from "react";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, User!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please log in</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
```

## Conditional Rendering using && Operator

The `&&` operator in React is used for conditional rendering. When applied, it evaluates the left operand, which is typically a boolean expression. If the left operand is true, it proceeds to render the right JSX operand. Otherwise, if the left operand is false, it skips rendering the right operand altogether.

The `&&` operator is useful for creating simple conditional statements in JSX without the need for if-else statements or ternary operators. It allows you to conditionally render components or elements based on the truthiness of a certain condition.

Here's a breakdown of how the `&&` operator works:

The left operand is evaluated.
If the left operand is true, the right operand is rendered.
If the left operand is false, the right operand is not evaluated or rendered.
By leveraging the `&&` operator, you can keep your JSX code concise and maintainable. It allows you to conditionally render specific components or elements based on certain conditions, enhancing the flexibility and interactivity of your React application.

Remember to use the `&&` operator judiciously and consider other conditional rendering techniques, such as the ternary operator or if-else statements, for more complex scenarios.

I hope this explanation clarifies the usage of the `&&` operator for conditional rendering in React.

```js
import React, { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn && (
        <div>
          <h1>Welcome to the Dashboard!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      {!isLoggedIn && (
        <div>
          <h1>Please log in to continue</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
```

In this example, we still use the `isLoggedIn` state variable to track the user's authentication status. Instead of using if-else statements, we use the `&&` operator for conditional rendering. When `isLoggedIn` is true, the first expression after the `&&` operator is evaluated and rendered. It displays the welcome message and the `Logout` button. When `isLoggedIn` is false, the second expression after the `&&` operator is evaluated and rendered. It shows the message prompting the user to log in and the `Login` button. The `&&` operator acts as a short-circuit evaluation. If the condition before the `&&` is false, React skips evaluating the subsequent expression, effectively not rendering it. Using the `&&` operator can be handy for simple conditional rendering when you have two distinct states to render. However, it can become cumbersome when you have more than two states to render. In such cases, you can use the ternary operator or if-else statements.
