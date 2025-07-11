import Header from "./components/Header/Header";
import AddToDo from "./components/AddToDo/AddToDo";
import ToDoItem from "./components/ToDoItem";
import { useState } from "react";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header />
      <main>
        <AddToDo setTodos={setTodos} />

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <ToDoItem todo={todo} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
