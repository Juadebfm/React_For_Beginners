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

- [How to Write Unit Tests in React](#how-to-write-unit-tests-in-react)
  - [How Is a Test Structured?](#how-is-a-test-structured)
    - [What to Test](#what-to-test)
    - [What Not to Test](#what-not-to-test)
  - [How to Set Up Our Project](#how-to-set-up-our-project)
  - [How to Write Your First Test for a React App](#how-to-write-your-first-test-for-a-react-app)
  - [How to Test With Mock Data in React](#how-to-test-with-mock-data-in-react)
  - [How to Test With Mock Data Covering All Branches in React](#how-to-test-with-mock-data-covering-all-branches-in-react)
  - [How to Test User Interactions in React](#how-to-test-user-interactions-in-react)
    - [How to Test a Function Call on Click of an Element](#how-to-test-a-function-call-on-click-of-an-element)
    - [How to Query Input Fields and Buttons](#how-to-query-input-fields-and-buttons)

# How to Write Unit Tests in React

**When you're building a website and coding all the cool features you had planned, you'll want to test if everything works as expected.**
Now, you can’t do that just by going through the website yourself – you need to check if each unit of your code is working as you want. For that, you need to write unit tests. And they can be quite a hassle when you actually get down to writing them. So, in this branch, we are going to learn how you can get started with writing unit tests in React.

## How Is a Test Structured?

Testing involves checking if your code is functioning as it's supposed to by comparing the expected output with the actual output.

### What to Test

In general, your tests should cover the following aspects of your code:

- If a component renders with or without props
- How a component renders with state changes
- How a component reacts to user interactions

### What Not to Test

Testing most of your code is important, but here are some things you do not need to test:

**Actual Implementation**: You do not need to test the actual implementation of a functionality. Just test if the component is behaving correctly. Let’s say you want to sort an array on the click of a button. There’s no need to test the actual sorting logic. You only test if the function was called and if the state changes are rendering correctly.

**Third Party libraries**: If you are using any third party libraries like Material UI, no need to test those – they should already be tried and tested. This might seem a little complicated at the moment, but you should understand better through examples.

Any test in React, no matter how complicated, follows this structure:

- Render the component
- Get an element from the component and simulate any user interactions
- Write an assertion.

## How to Set Up Our Project

We’ll be using [Jest](https://jestjs.io/docs/getting-started) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). Both of them come `pre - installed` with _create-react-app_. You can see what it looks like here:

```json
"dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
}
```

As you can see, Jest is not visible here. But, if you go to the node_modules folder, you will see Jest there. So, no need to install it separately. Also, make sure you have the following lines in your setupTests.js file:

```jsx
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
```

Also, in your package.json file, modify your scripts like this:

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --watchAll --coverage",
    "eject": "react-scripts eject"
},
```

This will run your tests in watch mode and also show you the coverage (that is, the portion of the code covered by your tests). You can also define the coverage threshold by adding another property jest. For now, keep the threshold at 80%.

```json
"jest": {
    "coverageThreshold": {
        "global": {
            "lines": 80
        }
    }
}
```

That’s it, now you are ready to start testing. Let’s first start with a basic test.

## How to Write Your First Test for a React App

Let’s write a test for the following component:

```jsx
const FirstTest = () => {
  return (
    <div>
      <h2> First test </h2>
    </div>
  );
};
```

Here, we just need to test if the h2 element renders. Now, where should we write the tests? We can write them inside a _tests_ folder anywhere in the src folder. The test file just needs to have a _.test.js/jsx_ extension and the test runner will pick it up.

This is how the test looks in our _FirstTest.test.jsx_ file:

```jsx
import { render, screen } from "@testing-library/react";
import FirstTest from "../components/FirstTest";

test("Example 1 renders successfully", () => {
  render(<FirstTest />);

  const element = screen.getByText(/first test/i);

  expect(element).toBeInTheDocument();
});
```

First, import the required methods. The _test()_ method contains an individual test. It takes the name of the test and a callback function as the two arguments. Now, following the structure mentioned above, render the component you're testing using the [render method](https://testing-library.com/docs/react-testing-library/api/#render). Then, use the _screen_ object to make a query for an element. In this case, it’s the _h2_ element. Our query gets an element containing text that matches the regex _/first test/i_ (i means ignore case).

Lastly, make the assertion using the _expect_ method. We expect the element to be in the document and it is, so the test passes.

There are lots of other assertions you can make in your tests. You can read more about them [here](https://jestjs.io/docs/using-matchers). Also, you can find a list of ways to query an element [here](https://testing-library.com/docs/queries/about/). We’ll use some of them in our further examples.

## How to Test With Mock Data in React

Here, we have a component with a prop data that displays a list of items. Let’s assume this data comes from the backend and your component is displaying this data.

```jsx
import React from "react";

const TestWithMockData = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id}
            {item.first_name},{item.last_name},{item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestWithMockData;
```

While writing tests for a component with props, you need to pass some mock data while rendering this component that pertains to your functionality. Here, one object in our data contains four fields, so we pass some mock data here.

```json
const mockData = [
    {
        "id": 1,
        "first_name": "Fletcher",
        "last_name": "McVanamy",
        "email": "mmcvanamy0@e-recht24.de",
        "age": 30
      }, {
        "id": 2,
        "first_name": "Clarice",
        "last_name": "Harrild",
        "email": "charrild1@dion.ne.jp",
        "age": 35
      },
]
```

Note that the actual data could contain thousands of records, but the mock data only needs to be relevant to what you want to test. Now, let’s write the test and check if the list renders.

```jsx
test("List renders successfully", () => {
  render(<TestWithMockData data={mockData} />);
  expect(screen.getByText(/fletcher/i)).toBeInTheDocument();
});
```

## How to Test With Mock Data Covering All Branches in React

Let’s introduce some branching in the above component. We’ll have another prop, _displayUnorderedList_, that determines whether to display an ordered or unordered list. We’ll also render _Senior_ for _age > 50_ and _Not Senior_ otherwise.

```jsx
import React from "react";

const TestWithMockData = ({ data, displayUnorderedList, handleClick }) => {
  return (
    <div>
      {displayUnorderedList ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.id}
              {item.first_name},{item.last_name},<a
                onClick={() => {
                  console.log("email link clicked");
                  handleClick();
                }}
              >
                {item.email}
              </a>
              {item.age > 50 ? "Senior" : "Not senior"}
            </li>
          ))}
        </ul>
      ) : (
        <ol>
          {data.map((item) => (
            <li key={item.id}>Last name: {item.last_name}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default TestWithMockData;
```

Here's the coverage report so far: [Coverage Report](./assets/img1.png)

You can see that Line 9 (that is, the unordered list part) is not covered by our existing tests. And our previous test has also failed since it is unable to find _fletcher_ in the component.
Why is this so?
In our previous test, we have not passed the _displayUnorderedList_ prop to the component so it is null. So, the component renders the ordered list and it does not contain the _first_name_.

So, let’s write another test covering the ordered list part.

```jsx
test("Ordered list renders", () => {
  render(<TestWithMockData data={mockData} displayUnorderedList={false} />);

  expect(screen.getByText(/McVanamy/i)).toBeInTheDocument();
});
```

Here, pass the prop’s value as false to render the ordered list. Also, add the displayUnorderedList prop to the failing test and pass the value true. Now, all our tests pass with 100% coverage.

Here's the coverage report so far: [Coverage Report](./assets/img-2.png)

One line is still not covered by the test cases, which is the branching logic for age. So, add another record to the mock data that has an age greater than 50.

```json
{
  "id": 3,
  "first_name": "Amby",
  "last_name": "Emmer",
  "email": "aemmer2@buzzfeed.com",
  "age": 67
}
```

Now, all our tests should pass with 100% coverage.

## How to Test User Interactions in React

The most important part of testing any UI app is testing its behaviour with various user interactions. Almost every functionality in a UI app involves user interactions. You can use the _user-event_ library to simulate user interactions. It has methods for simulating various user events such as click, type, hover, and so on.

First, we need to install the library:

```bash
npm install --save-dev @testing-library/user-event
```

We can use this library to simulate user events. In our examples, we’ll interact with different elements, mostly input and button elements.

### How to Test a Function Call on Click of an Element

In our above component, we need _toTestWithMockData_, make the email field clickable and call a function _handleClick_ on it. This will be passed as props to the component. There, replace _{item.email}_ with:

```jsx
<a
  onClick={() => {
    console.log("email link clicked");
    handleClick();
  }}
>
  {item.email}
</a>
```

Now, our test coverage takes a hit. To cover this scenario, write the following test:

```jsx
test("Email link click handler called", async () => {
  const mockHandleClick = jest.fn();
  render(
    <TestWithMockData
      data={mockData}
      displayUnorderedList={true}
      handleClick={mockHandleClick}
    />
  );
  await userEvent.click(screen.getByText(/mmcvanamy0@e-recht24.de/i));
  expect(mockHandleClick).toHaveBeenCalled();
});
```

First, create the mock of the _handleClick_ function using _jest.fn()_. We do not need the actual implementation of the method, as we only want to test the behaviour of the component. So, we create an empty mock and pass the same as props. Read more about mocking functions [here](https://jestjs.io/docs/mock-functions).

Now, query the _<a>_ element by text (any _email_ from the mock data). Use the _click()_ method to simulate a click event. Use _await_ as simulating a user event is an asynchronous operation.

Write an assertion in the end to check if the method was called. The method was called, so our test passes with 100% coverage.

### How to Query Input Fields and Buttons

So far, we have used only one method of querying elements – _getByText()_. Now, let’s see how you can query input fields and buttons.

```jsx
<input placeholder='Enter name'/>
<button> Submit </button>
```

To query these elements, you can do the following:

```jsx
const inputElement = screen.getByRole("textbox");
```

_getByRole_ finds an element by the given role. In this case, the textbox role means the _input_ element.

How is role determined? Each element has a defined role, so you do not need to specify an explicit role attribute. You can see a list of roles for different elements [here](https://www.w3.org/TR/html-aria/#docconformance). Whatever element you want, just do _getByRole_ and refer to the list.

For button, the default role is ‘button’ as you can see here:

```jsx
const button = screen.getByRole("button");
```

What if we add another _input_ element, _<input placeholder=’Enter description’/>_? The test runner will now throw an error saying that there are two elements with the same role. What should we do in such a scenario? Use another query _getByPlaceholderText()_.

```jsx
const nameInput = screen.getByPlaceholderText(/enter name/i);
const descrInput = screen.getByPlaceholderText(/enter description/i);
```

You can also use getByLabelText() if your input has a label.

```jsx
<label htmlFor='password'> Enter password</label>
<input type='password' id='password'/>


const passwordInput = screen.getByLabelText(/enter password/i);
```

For querying buttons, we can do _screen.getByRole('button')_.

```jsx
<button> Submit </button>
<button> Apply</button>
```

Since we have two buttons here, just doing getByRole will throw an error. So, we use a name option.

```jsx
const submitButton = screen.getByRole("button", { name: /submit/i });
const applyButton = screen.getByRole("button", { name: /apply/i });
```

The _name_ option can contain the label of a form element, text of a button, or the value of the _aria-label_ attribute of any element. We can also do _getByText()_ for a button.

```jsx
const submitButton = screen.getByText(/submit/i);
```
****