import Header from "./components/Header/Header";
import AddToDo from "./components/AddToDo/AddToDo";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import { useState, useEffect } from "react";

export default function ToDoList() {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Ошибка при чтении из localStorage:", e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function deleteToDo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function toggleToDo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const sortedToDos = [...todos].sort((a, b) => {
    if (a.completed && !b.completed) return 1;
    if (!a.completed && b.completed) return -1;
    return 0;
  });

  return (
    <>
      <Header />
      <main>
        <AddToDo setTodos={setTodos} />

        <ul style={{ listStyleType: "none" }}>
          {sortedToDos.map((todo) => (
            <li key={todo.id}>
              <ToDoItem
                todo={todo}
                onDelete={deleteToDo}
                onToggle={toggleToDo}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
