import "./ToDoItem.css";

export default function ToDoItem({ todo, onDelete }) {
  return (
    <section className="todo-item">
      <input
        type="checkbox"
        className="todo-checkbox"
        onClick={() => (todo.completed = !todo.completed)}
      />
      <span className="todo-text">{todo.text}</span>
      <button className="todo-delete" onClick={() => onDelete(todo.id)}>
        ❌
      </button>
    </section>
  );
}
