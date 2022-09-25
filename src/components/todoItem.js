import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

function TodoItem({ handleCheck, todo, deleteTodo }) {
  return (
    <>
      <div className=" todoList w-50 ">
        <ListGroup.Item className="listItem   mb-2">
          <Stack direction="horizontal" gap={3}>
            <div>
              <p className={todo.complete ? "line-through" : ""}>{todo.text}</p>
            </div>
            <div className=" ms-auto">
              <Form.Check
                aria-label="option 1"
                onClick={() => handleCheck(todo.id)}
              />
            </div>
            <div>
              <Button
                variant="outline-secondary"
                id="button-addon2"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </Button>
            </div>
          </Stack>
        </ListGroup.Item>
      </div>
    </>
  );
}

export default TodoItem;
