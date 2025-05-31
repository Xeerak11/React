
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Addtodo from "./components/addtodo";
import ItemList from "./components/itemList";
import DoneTodos from "./DoneTodos";
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  const [doneTodos, setdoneTodos] = useState(() => {
    const stored = localStorage.getItem("Done-Todos");
    return stored ? JSON.parse(stored) : [];
  });
  const [todos, settodos] = useState(() => {
    const stored = localStorage.getItem("Todo-App");
    return stored ? JSON.parse(stored) : [];
  });

  const handleDoneTodos = (todo, index) => {
    setdoneTodos((prev) => [...prev, todo]);
    settodos((prev) => {
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
  };

  const addtodos = (todo) => {
    settodos((prev) => [...prev, todo]);
  };

  useEffect(() => {
    localStorage.setItem("Todo-App", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("Done-Todos", JSON.stringify(doneTodos));
  }, [doneTodos]);

  const deleteTodo = (index) => {
    settodos((prev) => {
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
  };
  const handleDeleteTodo=(index)=>{
    setdoneTodos((prev) => {
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
  }
  const editTodo = (index, newValue) => {
    settodos((prev) => {
      const copy = [...prev];
      copy[index] = newValue;
      return copy;
    });
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/" style={{ marginRight: 16 }}>Home</Link>
        <Link to="/done">Done Todos</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Header />
              <Addtodo addtodo={addtodos} />
              <ItemList
                todos={todos}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
                handleDoneTodos={handleDoneTodos}
              />
            </div>
          }
        />

        <Route
          path="/done"
          element={
            <div className="container done-container">
              <DoneTodos doneTodos={doneTodos} handleDeleteTodo={handleDeleteTodo} />
            </div>
          }
        />

        <Route
          path="*"
          element={
            <div className="notfound">
              <h2>404: Page Not Found</h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
