import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function TodoItem({ handleCheck, todo, deleteTodo }) {
  return (
    <>
      <div className=" todoList w-50 ">
       
          <ListGroup.Item className="listItem  d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
            <p className={todo.complete ? "line-through" : ""}>{todo.text}</p>
            <div>
              <Button
                className="mx-2"
                variant="outline-secondary"
                id="button-addon2"
                onClick={() => handleCheck(todo.id)}
              >
                {todo.complete ? "not done" : "done"}
              </Button>
              <Button
                variant="outline-secondary"
                id="button-addon2"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
      
      </div>
    </>
  );
}

export default TodoItem;
