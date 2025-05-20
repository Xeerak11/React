import React from 'react'

function TodoItem ({index,todo,deleteTodo}){
  return (
    <div className='todo-box'>
        <div className="text-box">

      {todo}
        </div>
      <button className="delete-btn" onClick={()=>deleteTodo(index)}>Delete your task</button>
    </div>
  )
}

export default TodoItem




  