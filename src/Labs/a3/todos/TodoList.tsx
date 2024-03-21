import todos from "./todos.json";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  const count = useSelector((store: any) => store.counter.count);
  return (
    <div>
      <h3>Count: {count}</h3>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
