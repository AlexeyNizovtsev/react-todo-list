import { useState } from "react";
import "./AddToDo.css";

export default function AddToDo({ setTodos }) {
  const [value, setValue] = useState("");
  const isDisabled = value.trim().length === 0;

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim()) {
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: value.trim().charAt(0).toUpperCase() + value.trim().slice(1),
          completed: false,
        },
      ]);
    }
    setValue("");
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="add">Добавить задачу:</label>
      <input
        type="text"
        id="add"
        className="control"
        placeholder="Обязательно нужно..."
        value={value}
        onChange={handleChange}
      />

      <button type="submit" className="addButton" disabled={isDisabled}>
        Добавить
      </button>
    </form>
  );
}
