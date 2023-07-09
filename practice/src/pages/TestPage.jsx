import React from "react";
import Navbar from "../components/NavBar";
import Test from "../components/Test";
import ClassTest from "../components/ClassTest"

const TestPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Test Page</h1>
      <Test />
      <ClassTest/>
    </div>
  );
};

export default TestPage;
