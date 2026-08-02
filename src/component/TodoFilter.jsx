




import React from 'react'

export default function TodoFilter({status, setStatus}) {

  return (
  
<div className="action">
  <button
    className={status === "all" ? "active" : ""}
    onClick={() => setStatus("all")}
  >
    All
  </button>

  <button
    className={status === "completed" ? "active" : ""}
    onClick={() => setStatus("completed")}
  >
    Completed
  </button>

  <button
    className={status === "active" ? "active" : ""}
    onClick={() => setStatus("active")}
  >
    Active
  </button>
</div>
  )
}

