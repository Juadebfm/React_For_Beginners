import Counter from "./Counter";
import Todo from "./components/Todo";

export default function App() {
  const todos = [
    { id: 1, title: "code the app component", completed: false },
    { id: 2, title: "test the app component", completed: true },
    { id: 3, title: "copy code from friends", completed: true },
    { id: 4, title: "use chat-gpt to code my project", completed: false },
  ];
  return (
    <div className="p-20">
      <Counter />
      <div className="mt-20 mx-auto text-center w-1/2 space-y-3 p-8">
        {todos.map((todo) => {
          return <Todo todo={todo} />;
        })}
      </div>
    </div>
  );
}
