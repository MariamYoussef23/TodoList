import "./App.css";
import { useState, useEffect } from "react";
import TaskInput from "./components/input";
import TodoList from "./components/todoList";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [filter, setFilter] = useState("All");
  //const [doneTasksCount, setDoneTasksCount] = useState(0)
  function AddTodo(x) {
    setTodoList((oldList) => [
      ...oldList,
      { text: x, complete: false, id: Math.random() },
    ]);
  }

  const updateFilter = (text) => {
    setFilter(text);
  };

  const displayTodos = () => {
    switch (filter) {
      case "Completed":
        return todoList.filter((todo) => todo.complete);
      case "Incomplete":
        return todoList.filter((todo) => !todo.complete);
      case "All":
      default:
        return todoList;
    }
  };

  function handleCheck(id) {
    setTodoList((oldTodos) => {
      return oldTodos.map((todo) => {
        if (todo.id === id) {
          todo.complete = !todo.complete;
        }
        return todo;
      });
    });
  }

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const uncheckAll = () => {
    setTodoList((oldTodos) => {
      return oldTodos.map((todo) => {
        todo.complete = false;
        return todo;
      });
    });
  };

  const checkAll = () => {
    setTodoList((oldTodos) => {
      return oldTodos.map((todo) => {
        todo.complete = true;
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <div className=" App gradient-custom">
        <h1 className="title pt-3">Todo List</h1>
        <TaskInput
          AddTodo={AddTodo}
          updateFilter={updateFilter}
          uncheckAll={uncheckAll}
          checkAll={checkAll}
        />

        <TodoList
          displayTodos={displayTodos}
          handleCheck={handleCheck}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}

export default App;
