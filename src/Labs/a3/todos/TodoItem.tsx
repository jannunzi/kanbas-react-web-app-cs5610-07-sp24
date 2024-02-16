function TodoItem({
  todo = { title: "TBD", done: false },
}: //   title,
//   done = false,
{
  todo: { title: string; done: boolean };
  //   title: string;
  //   done: boolean;
}) {
  return (
    <li className="list-group-item">
      {todo.done ? "✅" : "❌"} {todo.title}
    </li>
  );
}

export default TodoItem;
