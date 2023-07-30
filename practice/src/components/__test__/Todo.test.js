// import 3 things from the react test library
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
// import the component
import Todo from "../Todo";

// this ensures all the test is cleaned up after run so at rerun it starts from it's original starting point. There no extra load/attachments to the components :::: remember clean up in useEffect?
afterEach(() => {
  cleanup();
});

// Below are manual testing. We can use a snapshot to makesure the component hasn't chnaged since we last run the test
test("should render non-completed Todo component", () => {
  // create todo item
  const todo = { id: 1, title: "code the app component", completed: false };
  //render the component
  render(<Todo todo={todo} />);
  //   get the id
  const todoElement = screen.getByTestId("todo-1");
  //make assertions
  expect(todoElement).toBeInTheDocument();
  //advanced
  expect(todoElement).toHaveTextContent("CODE THE APP COMPONENT");
  // check if it's contains the "<strike>" tag
});
test("should render completed Todo component", () => {
  // create todo item
  const todo = { id: 2, title: "copy the app component", completed: true };
  // render the component
  render(<Todo todo={todo} />);
  // get the todo element by test id
  const todoElement = screen.getByTestId("todo-2");
  // make assertions
  expect(todoElement).toBeInTheDocument();
  // advanced
  expect(todoElement).toHaveTextContent("COPY THE APP COMPONENT");
  // check for completion using the strike tag
  const strikeElement = todoElement.querySelector("strike");
  expect(strikeElement).toBeInTheDocument();
});

// in this one we will use snapshot which is more efficient
test("matches snapshot", () => {
  // create todo item
  const todo = { id: 2, title: "copy the app component", completed: true };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
