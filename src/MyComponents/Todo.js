import React from 'react'

const Todo = ({todoitem,onDelete}) => {
  return (
    <>
       <div>
      <h4>{todoitem.title}</h4>
      <p>{todoitem.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todoitem)}}>DELETE</button>
    </div>
    <hr/>
    </>
  )
}

export default Todo
