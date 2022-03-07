import React, { useState } from "react";
import Input from "./input";
import Todo from "./todo";

import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="app">
      <h1>Todo App</h1>
      <Input setTodos={setTodos} todoItems={todos} />
      <Todo todoItems={todos} setTodos={setTodos} />
    </div>
  );
}
