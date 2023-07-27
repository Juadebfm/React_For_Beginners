import { useContext } from "react";
import { AppContext } from "./ContextTutorial";
// { setUsername }

const Login = () => {
  const { setUsername, username } = useContext(AppContext);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <h2>{username}</h2>
    </div>
  );
};

export default Login;
