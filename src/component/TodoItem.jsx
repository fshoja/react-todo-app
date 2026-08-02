import React from 'react'
import { BiTrash } from 'react-icons/bi'
import { CgCheck } from 'react-icons/cg'

export default function TodoItem({todo,onRemove,onEdit, title}) {

  const removtodos =(todoid)=>(
    onRemove(todoid)
  
    
  )
  const editodos =(todoid)=>(
    onEdit(todoid)
  
    
  )
  return (
<div className="todoitem">
  <div className={`todo ${todo.completed ? 'completed':''}`}>
 <p>{todo.title}</p>
  <button onClick={()=> editodos(todo.id)}><CgCheck className=' check' size={30}/></button>
  <button onClick={()=> removtodos(todo.id)}><BiTrash className=' trash' size={20}/></button>
  </div>

</div>
  )
}


  