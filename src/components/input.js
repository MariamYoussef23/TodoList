import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Filters from "./filters";

function TaskInput({ AddTodo, updateFilter, uncheckAll, checkAll }) {
  const [input, setInput] = useState("");

  return (
    <>
      <div className=" filter d-flex justify-content-center p-5">
        <InputGroup>
          <Form.Control
            placeholder="Enter a new task here"
            aria-label="Enter a new todo item"
            aria-describedby="basic-addon2"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <Button
            className="mx-2"
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => {
              AddTodo(input);
              setInput("");
            }}
          >
            Add todo
          </Button>
        </InputGroup>

        <Filters
          updateFilter={updateFilter}
          uncheckAll={uncheckAll}
          checkAll={checkAll}
        />
      </div>
    </>
  );
}

export default TaskInput;
