import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'


export default function TodoForm({todotitle, addtodo,setTodotitle}) {
 
  return (
  <form onSubmit={addtodo}>
    <input type="text" value={todotitle} onChange={(e)=> setTodotitle(e.target.value)}   placeholder="Enter a task..."/>
    <button>
  <FaPlus />
    </button>
  </form>
  )
}
