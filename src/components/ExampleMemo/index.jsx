import { memo, useState } from "react";

const TodoList = memo((props) => {
  const { todos } = props;
  console.log("call todo list");
  return (
    <>
      <h2>My Todo List</h2>
      {todos.map((todo, index) => {
        return <p key={`${todo}-${index}`}>{todo}</p>;
      })}
    </>
  );
});

TodoList.displayName = "TodoList";

const Counter = memo((props) => {
  const { count } = props;
  console.log("call counter");
  return <h2>Count: {count}</h2>;
});

Counter.displayName = "Counter";

function ExampleMemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Coding", "CreateVideo"]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  return (
    <>
      <TodoList todos={todos} />
      <button onClick={() => addTodo("Playing Piano")}>Add Todo</button>
      <Counter count={count} />
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default ExampleMemo;
