import Login from "./Login";
import User from "./User";
import { useState, createContext } from "react";
1

export const AppContext = createContext(null); //AppContext

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
