import { useState } from "react";

export default function App() {
  const [testName, setTestName] = useState("Test");

  function updateTestName() {
    setTestName("Updated Test");
  }

  return (
    <div>
      <h1>{testName}</h1>
      <button onClick={updateTestName}>Update Test Name</button>
    </div>
  );
}
