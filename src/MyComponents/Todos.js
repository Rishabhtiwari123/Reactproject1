import React from 'react'
import Todo from "../MyComponents/Todo"
const Todos = (props) => {
  let myStyle={
    minHeight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className="container" style={myStyle}>
     <h3 >Todos List</h3>
     {props.todos.length===0?"no todos to display":
     props.todos.map((todoitem)=>{
      return (
        <Todo todoitem={todoitem} key={todoitem.sno} onDelete={props.onDelete}/>     
  )
     })
     }
    </div>
  )
}

export default Todos
