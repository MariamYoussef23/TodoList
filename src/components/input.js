import { useState } from "react";

function UserInput({ AddTodo }) {
  const [todoItem, setTodoItem] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter a new todo item"
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
        AddTodo(todoItem);
        setTodoItem("");
        }}
      >
        Add Todo
      </button>
    </>
  );
}

export default UserInput;
