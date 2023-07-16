import Login from "./Login";
import User from "./User";
import { useState, createContext } from "react";

// function ContextTutorial() {
//   const [username, setUsername] = useState("");
//   return (
//     <div>
//       <Login setUsername={setUsername} />
//       <User username={username} />
//     </div>
//   );
// }

// first we import the create context from react
// Context is just a collection of states and we can have access to these states and their value using the context api

export const AppContext = createContext(null);

function ContextTutorial() {
  const [username, setUsername] = useState("");
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login />
      <User />
    </AppContext.Provider>
  );
}

export default ContextTutorial;
