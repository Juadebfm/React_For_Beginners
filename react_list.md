<div align="center">
  <h1> React Class: List</h1>
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

- [List](#list)
  - [Keys](#keys)
  - [How to use react lists](#how-to-use-react-lists)
    - [Step 1: Setting up the data](#step-1-setting-up-the-data)
    - [Step 2: Rendering the List](#step-2-rendering-the-list)
    - [Step 3: Adding Keys](#step-3-adding-keys)
    - [Step 4: Rendering Lists of Components](#step-4-rendering-lists-of-components)
    - [Step 5: Extracting Components](#step-5-extracting-components)

# List

React Lists are a powerful feature that allows you to render a collection of items dynamically. They provide an efficient way to render multiple elements based on an array of data. In React, you will render lists with some type of loop. The JavaScript map() array method is generally the preferred method.

## Keys

Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list. Keys need to be unique to each sibling. But they can be duplicated globally. Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key. Take a look at the code example below:

```jsx
import React from "react";

function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <div>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car brand={car} key={car} />
        ))}
      </ul>
    </div>
  );
}

export default Garage;
```

**When you run this code in your create-react-app, it will work but you will receive a warning that there is no "key" provided for the list items.**

Remember, The key is a special attribute that you can use to give each element a unique identifier. Let's refactor our previous example to include keys:

```jsx
import React from "react";

function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];

  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}

export default Garage;
```

If the array of objects doesn't have a unique identifier like an id, you can use the index of each item as the key in the map function. Although it's generally recommended to have a unique identifier for the key prop, using the index as a fallback can work when there are no other options available. Here's an example:

```jsx
import React from "react";

function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = [{ brand: "Ford" }, { brand: "BMW" }, { brand: "Audi" }];

  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car, index) => (
          <Car key={index} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}

export default Garage;
```

In this example, the key prop is set to the index of each item in the map function. Keep in mind that using the index as the key can have performance implications if the order or length of the array changes frequently. It's best to have a stable and unique identifier whenever possible.

## How to use react lists

Let's dive into how to use React Lists step by step, along with code examples.

### Step 1: Setting up the data

First, you need an array of data that you want to render. Let's consider an example where we have an array of numbers:

```jsx
const numbers = [1, 2, 3, 4, 5];
```

### Step 2: Rendering the List

To render the list, you'll use the map() method on the array of data. This method allows you to transform each item of the array into JSX elements. You'll iterate over the array, create a new element for each item, and return an array of JSX elements. Here's an example of rendering a list of numbers:

```jsx
const numbers = [1, 2, 3, 4, 5];

const NumberList = () => {
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
};
```

In the above example, we're using the map() method to iterate over the numbers array. For each number, we're returning a `<li>` element with the value of the number. Note the key attribute on the `<li>` element, which helps React efficiently update the list.

### Step 3: Adding Keys

When rendering a list in React, each item should have a unique "key" prop assigned to it. The key helps React identify which items have changed, been added, or been removed when the list is updated. In the example above, we're using the key={number} prop on the `<li>` element, where number is a unique identifier for each item in the numbers array. It's important to use a stable and unique identifier for keys, such as an ID associated with the data.

### Step 4: Rendering Lists of Components

You can also render lists of React components. Let's say we have an array of objects representing products:

```jsx
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];
```

To render a list of product components, you'll use the same approach as before:

```jsx
const ProductList = () => {
  return (
    <ul>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
};
```

In this example, we're iterating over the products array using map(), and for each product, we're rendering a Product component with a unique key and passing the product object as a prop.

### Step 5: Extracting Components

To make your code more modular and reusable, you can extract list items into separate components. Let's extract the product item into a Product component:

```jsx
const Product = ({ product }) => {
  return (
    <li key={product.id}>
      {product.name} - ${product.price}
    </li>
  );
};
```

Now, the ProductList component renders the list of Product components:

```jsx
const ProductList = () => {
  return (
    <ul>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
};
```

This approach allows you to encapsulate the rendering logic for each item, making your code more modular and maintainable. That's it! You've learned how to use React Lists to render dynamic collections of items. By utilizing the _map()_ method and assigning unique keys to each item, you can efficiently render and update lists in React. Remember to ensure the keys are stable and unique, as React relies on them to optimize rendering performance. Also, keep in mind that the key should be associated with the data itself, not the order or index of the items.
