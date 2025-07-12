import "./ToDoItem.css";

export default function ToDoItem({ todo, onDelete, onToggle }) {
  return (
    <section className="todo-item">
      <input
        type="checkbox"
        className="todo-checkbox"
        defaultChecked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      <span className="todo-text">{todo.text}</span>
      <button className="todo-delete" onClick={() => onDelete(todo.id)}>
        ❌
      </button>
    </section>
  );
}
