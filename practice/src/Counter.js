import React, { useState } from "react";

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };
  const restart = () => {
    setCount(0);
  };

  const switchSigns = () => {
    setCount((prevState) => prevState * -1);
  };
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">
        <h3 data-testid="count">{count}</h3>
      </h1>
      <div className="flex items-center justify-center space-x-2 mt-8">
        <button
          onClick={increment}
          className="bg-green-500 hover:text-black hover:shadow-md px-4 py-2 font-serif text-base text-white rounded-md hover:bg-green-300"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-green-500 hover:text-black hover:shadow-md px-4 py-2 font-serif text-base text-white rounded-md hover:bg-green-300"
        >
          Decrement
        </button>
        <button
          onClick={restart}
          className="bg-green-500 hover:text-black hover:shadow-md px-4 py-2 font-serif text-base text-white rounded-md hover:bg-green-300"
        >
          Restart
        </button>
        <button
          onClick={switchSigns}
          className="bg-green-500 hover:text-black hover:shadow-md px-4 py-2 font-serif text-base text-white rounded-md hover:bg-green-300"
        >
          Switch Signs
        </button>
      </div>
    </div>
  );
}

export default Counter;
