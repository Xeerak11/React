// import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Addtodoform from './components/Addtodoform'
import Header from './components/Header'
// import Addtodoform from './components/Addtodoform';
// import TodoList from './components/TodoList';
  





import React from 'react'
import { useState } from 'react'
import TodoList from './components/TodoList'
const App = () => {
  const [todos,setTodos]=useState([])

  const addtodos=(todo)=>{
    const newTodos=[...todos,todo]
    setTodos(newTodos)
  }
  const deleteTodo=(index)=>{
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="main">

    <div className='box'>
      <Header/ >
      <Addtodoform addtodo={addtodos} />
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
    </div>
  )
}

export default App


