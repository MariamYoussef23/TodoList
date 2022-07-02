import TodoItem from "./todoItem";

function TodoList({ displayTodos, handleCheck, deleteTodo }) {
  return (
    <>
      <ul>
        {displayTodos().map((todo) => {
          return <TodoItem key={todo.id} handleCheck={handleCheck} todo={todo}  deleteTodo={deleteTodo}/>;
        })}
      </ul>
    </>
  );
}

export default TodoList;
