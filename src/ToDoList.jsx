import Header from "./components/Header/Header";
import AddToDo from "./components/AddToDo/AddToDo";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import { useState } from "react";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);

  function deleteToDo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  }

  return (
    <>
      <Header />
      <main>
        <AddToDo setTodos={setTodos} />

        <ul style={{ listStyleType: "none" }}>
          {todos.map((todo) => (
            <li key={todo.id}>
              <ToDoItem todo={todo} onDelete={deleteToDo} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
