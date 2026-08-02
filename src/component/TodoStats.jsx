
import React from 'react'

export default function TodoStats({todos}) {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const active = total - completed;
  

  return (
<div className="totals">
  <p>Total Tasks: {total}</p>
  <p>Active Tasks: {active}</p>
  <p>Completed Tasks: {completed}</p>
</div>
  )
}
