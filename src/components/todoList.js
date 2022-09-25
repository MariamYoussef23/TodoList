import TodoItem from "./todoItem";
import ListGroup from "react-bootstrap/ListGroup";

function TodoList({ displayTodos, handleCheck, deleteTodo }) {
  return (
    <>
      <ListGroup variant="flush">
        {displayTodos().map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              handleCheck={handleCheck}
              todo={todo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ListGroup>
    </>
  );
}

export default TodoList;
