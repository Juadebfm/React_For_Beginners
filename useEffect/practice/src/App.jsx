import { useState, useEffect } from "react";

function App() {
  const [backendData, setBackendData] = useState("posts");

  //https://jsonplaceholder.typicode.com/

  //create side effects whenever something happens
  // Everything inside the useEffect arrow function will be executed everytime our application renders
  // useEffect(() => {
  //   console.log("Render");
  // });

  // To run the useeffect everytime we do something with the useState we can pass an array as the second parameter to our useeffect
  // useEffect(() => {
  //   console.log("Render");
  // }, [backendData]);

  //so now say we want to query the jsonplaceholder api when ever the use effect is ran and the usestate is triggered


  return (
    <>
      <div className="p-16">
        <button
          onClick={() => setBackendData("posts")}
          className="border border-slate-500 mr-4 hover:bg-slate-500 hover:text-white rounded-md text-black px-3 py-2 w-32 h-14"
        >
          Posts
        </button>
        <button
          onClick={() => setBackendData("users")}
          className="border border-slate-500 mr-4 hover:bg-slate-500 hover:text-white rounded-md text-black px-3 py-2 w-32 h-14"
        >
          Users
        </button>
        <button
          onClick={() => setBackendData("comments")}
          className="border border-slate-500 mr-4 hover:bg-slate-500 hover:text-white rounded-md text-black px-3 py-2 w-32 h-14"
        >
          Comments
        </button>
      </div>
      <h1 className="text-3xl font-semibold capitalize pl-12">{backendData}</h1>
    </>
  );
}

export default App;
