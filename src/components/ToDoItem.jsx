export default function ToDoItem({ todo }) {
  return (
    <section>
      <input type="checkbox" checked={todo.completed} />
      <span>{todo.text}</span>
      <button onClick={() => {}}>❌</button>
    </section>
  );
}
