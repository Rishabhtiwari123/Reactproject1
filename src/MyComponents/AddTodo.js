
import React,{ useState } from 'react';
const AddTodo = ({addTodo}) => {
   const [title,setTitle]=useState("");
   const [desc,setDesc]=useState("");
   const submit=(e)=>{
    e.preventDefault();
      if(!title||!desc){
        alert("title or description cannot be blank");
      }
      else{
    addTodo(title,desc);                 
      setTitle("");
      setDesc("");
      }
   }
  return (
    <div className="container" >
        <h1>Add a Todo</h1>
      <form onSubmit={submit}>
  <div className="form-group">
    <label htmlFor="title">Todo Title</label>
    <input type="text"  value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title"/>
   
  </div>
  <div className="form-group">
    <label htmlFor="desc">Todo Description</label>
    <input type="text"  value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="htmlForm-control" id="desc" placeholder="Enter Description"/>
  </div>

  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodo
