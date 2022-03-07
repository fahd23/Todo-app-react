import React from "react";
import "./styles.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Todo({ todoItems, setTodos }) {
  const toggleDoneStatus = (id) => {
    const changeTodo = todoItems.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTodos(changeTodo);
  };

  return (
    <div>
      <div className="todo-div">
        {todoItems.map((item) => (
          <div
            className="todos"
            key={item.id}
            onClick={() => {
              toggleDoneStatus(item.id);
            }}
          >
            {item.todoName}
            <div className={item.isDone ? "done" : "not-done"}>
              <BsFillCheckCircleFill />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
