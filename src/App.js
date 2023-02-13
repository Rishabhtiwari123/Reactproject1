
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo"
import About from "./MyComponents/About";
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
else{
  initTodo=JSON.parse(localStorage.getItem("todos"))
}
  const onDelete=(todoitem)=>{
    console.log("I am ondelete",{todoitem})
    setTodos(todos.filter((e)=>{
      return  e!==todoitem;
    }));
  }
  // const [todos,setTodos]=useState([
  //   {sno:1,
  //     title:"go to the market",
  //     desc:"to buy item1"
  //   },
  //   {sno:2,
  //     title:"go to the mall",
  //     desc:"to buy item2"
  //   },
  //   {sno:3,
  //     title:"go to the city",
  //     desc:"to buy item3"
  //   }                                   
  // ]);
  const addTodo=(title,desc)=>{
     console.log("I am adding this tood",title,desc); 
     let sno;
     if(todos.length===0){
      sno=0;
     }
     else{
      sno=todos[todos.length-1].sno+1;
     }
     const myTodo={
      sno:sno,
      title:title,
      desc:desc
     } 
     setTodos([...todos,myTodo]);
     console.log(myTodo)
  }
  const [todos,setTodos]=useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  return (
  <>
  <Router>
       <Header title="My Todos List" searchBar={true}/>
       <Switch>
       <Route exact path="/" render={()=>{
        return (
        <>
          <AddTodo addTodo={addTodo}/>
       <Todos todos={todos} onDelete={onDelete}/>
        </>)
       }}>
          </Route>
          <Route exact path="/about" >
            
          <About/>
          </Route>
        </Switch>
       <Footer/>
       </Router>   
  </>
  );
}

export default App;
