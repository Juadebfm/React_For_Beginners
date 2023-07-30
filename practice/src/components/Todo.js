import React from "react";

function Todo({ todo }) {
  const { id, title, completed } = todo;
  const h1 = <h1 className="font-semibold font-serif">Todo - u{title.toUpperCase()}</h1>;
  const text = completed ? <strike>{h1}</strike> : h1;
  return (
    <div data-testid={`todo-${id}`} className="p-10 bg-slate-200">
      {text}
    </div>
  );
}

export default Todo;
