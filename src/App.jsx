
import { useState } from 'react';
import './App.css'

import Todos from './component/TodoItem'
import Todolists from './component/Todolists'
import { TbPlusEqual } from 'react-icons/tb';
import { BiTrash } from 'react-icons/bi';
import { CgCheck } from 'react-icons/cg';

import Todolist  from './component/Todolists';



export default function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");



  return (
   <div className="container">
<Todolist/>


   </div>
  )
}
