
import React, { useState } from "react";

function Item({ index, todo, deletetodo, edittodo, handleDoneTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    edittodo(index, editedTodo);
    setIsEditing(false);
  };

  return (
    <div className="item-container">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
          <button className="save" onClick={handleSaveClick}>
            Save
          </button>
        </>
      ) : (
        <>
          <button
            className="done"
            onClick={() => handleDoneTodos(todo, index)}
          >
            Mark as Done
          </button>
          <span>{todo}</span>
          <button className="edit" onClick={handleEditClick}>
            Edit
          </button>
          <button className="delete" onClick={() => deletetodo(index)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default Item;

