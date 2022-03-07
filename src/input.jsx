import React, { useState } from "react";
import "./styles.css";
import { v4 } from "uuid";

export default function Input({ setTodos }) {
  const [input, setInput] = useState("");
  const newTodoObj = {
    id: v4(),
    todoName: input,
    isDone: false
  };
  const addTodos = () => {
    setTodos((prev) => [...prev, newTodoObj]);
    setInput("");
  };

  return (
    <div className="input-component">
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => setInput(() => e.target.value)}
        placeholder="Take a notes"
      />
      <button
        className="add-btn"
        onClick={() => {
          addTodos();
        }}
      >
        +
      </button>
    </div>
  );
}
