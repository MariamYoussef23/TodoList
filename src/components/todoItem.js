function TodoItem({ handleCheck, todo, deleteTodo }) {
  return (
    <li>
      <div className = {todo.status ? 'line-through' : ''}>{todo.value}</div>
      <input type="checkbox" checked ={todo.status ? 'checked' : ''}onChange={() => handleCheck(todo.id)} />
      <button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
