import { useState, useEffect } from "react";

const WindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    //NB since we want this to happen onMount, we just pass in the empty array, read about onMount in javascript and react
    window.addEventListener("resize", handleResize);

    // now because we don't want to have an eventlistener when we delete this component, or unmount it, coz event listeners are hooked up to the entire project or DOM, we can do what we discussed b4 called useEffect clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div className="text-center mt-64">{windowWidth}</div>;
};

export default WindowWidth;
