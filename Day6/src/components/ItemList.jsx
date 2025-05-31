
import React from "react";
import Item from "./item";

function ItemList({ deleteTodo, editTodo, todos, handleDoneTodos }) {
  return (
    <div className="item-list">
      {todos.map((todo, index) => (
        <Item
          key={index}
          index={index}
          todo={todo}
          deletetodo={deleteTodo}
          edittodo={editTodo}
          handleDoneTodos={handleDoneTodos}
        />
      ))}
    </div>
  );
}

export default ItemList;

