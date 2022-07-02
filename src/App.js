import "./App.css";
import { useState, useEffect } from "react";
import UserInput from "./components/input";
import TodoList from "./components/todoList";
import Filters from "./components/filters";
function App() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [filter, setFilter] = useState("All");
  //const [doneTasksCount, setDoneTasksCount] = useState(0)
  function AddTodo(x) {
    setTodoList((oldList) => [
      ...oldList,
      { value: x, status: false, id: Math.random() },
    ]);
  }

  const updateFilter = (text) => {
    setFilter(text);
  };

  const displayTodos = () => {
    switch (filter) {
      case "Completed":
        return todoList.filter((todo) => todo.status);
      case "Incomplete":
        return todoList.filter((todo) => !todo.status);
      case "All":
      default:
        return todoList;
    }
  };

  function handleCheck(id) {
    setTodoList((oldTodos) => {
      return oldTodos.map((todo) => {
        if (todo.id === id) {
          todo.status = !todo.status;
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
        todo.status = false;
        return todo;
      });
    });
  };

  const checkAll = () => {
    setTodoList((oldTodos) => {
      return oldTodos.map((todo) => {
        todo.status = true;
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <h1>Todo List</h1>
      <UserInput AddTodo={AddTodo} />
      <Filters
        updateFilter={updateFilter}
        uncheckAll={uncheckAll}
        checkAll={checkAll}
      />
      <TodoList
        displayTodos={displayTodos}
        handleCheck={handleCheck}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
