import todos from "./todos.json";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
