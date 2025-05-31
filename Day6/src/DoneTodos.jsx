

import React from "react";
import "./App.css"
function DoneTodos({ doneTodos, handleDeleteTodo }) {
  return (
    <div className="done-container">
      <h2>Completed Todos</h2>
      {doneTodos.length === 0 ? (
        <p>No completed tasks yet.</p>
      ) : (
        <ul>
          {doneTodos.map((todo, i) => (
            <li className="item-container"key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>{todo}</span>
              <button className="delete" onClick={() => handleDeleteTodo(i)} style={{ marginLeft: "10px" }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DoneTodos;
