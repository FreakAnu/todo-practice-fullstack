import {  useState } from "react"
import CreateTodo from "./components/CreateTodo"
import Todos from "./components/Todos"



function App() {
  const [todos,setTodos] = useState([])
    fetch("http://localhost:3000/todos")
    .then(async function(res){
      const json = await res.json()
      setTodos(json.todos)
    })
  // useEffect(function(){
  //   async function getTodo(){
  //     const response = await  fetch("http://localhost:3000/todos")
  //     const todos = await response.json()
  //     setTodos(todos)
  //   }
  //   getTodo()
  // })


  return (
    <>
      <CreateTodo />
      <Todos todos={todos}/>
    </>
  )
}

export default App
