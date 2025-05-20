import React from 'react'

import { useState } from 'react'



import "../App.css"

function Addtodoform ({addtodo})  {
    const [todo,setTodo]=useState("");
    const handlesubmit=(e)=>{
        e.preventDefault();
        if (todo.trim()){
            addtodo(todo);
            setTodo("");
        }
    };

   
  return (
    <form className='form' onSubmit={handlesubmit}>
        <input type="text" placeholder='Add your task' value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button className='add-btn' type="submit" onClick={()=>addtodo}>Add task</button>
    </form>
  )
}

export default Addtodoform

