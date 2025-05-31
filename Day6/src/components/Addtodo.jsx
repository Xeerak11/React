
import React, { useState } from "react";

function Addtodo({ addtodo }) {
  const [todo, settodo] = useState("");

  const handleOnsubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      addtodo(todo);
      settodo("");
    }
  };

  return (
    <form onSubmit={handleOnsubmit}>
      <input
        type="text"
        placeholder="Add your task"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default Addtodo;

