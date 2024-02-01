import { useState,useEffect} from 'react'
import './App.css'
import CreateTodo from './Components/CreateTodo'
import Todos from './Components/Todos'

function App() {
//   const todo=[{
//     title:"Frontend ",
//     description:"Make a todo frontend"
//   },
// {
//   title:"Backend ",
//     description:"Make a todo backend"

// }
// ]
const [todo,setTodo]=useState([]);
useEffect(()=>{
  fetch("http://localhost:3000/todos").then(async (res)=>{
    const json=await res.json();
    console.log(json)
    setTodo(json.todos)
  })
},[])
  


return (
    <>
    <CreateTodo/>
    <Todos todo={todo} />
    </>
  )
}

export default App
