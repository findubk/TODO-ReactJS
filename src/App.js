import React,{useState,useEffect} from 'react'
import './App.css';
import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

function App() {


  const [inputText,setinputText]=useState("")
  const [Todos,setTodos]=useState([])
  const [status,setstatus]=useState("all")
  const [filterTodos,setfilterTodos]=useState([])


  useEffect(()=>{
    getLocalTodo()
  },[])
  useEffect(()=>{
    filterHAndler()
    saveLocalTodos()
  },[Todos,status])

  const filterHAndler=()=>{
    switch(status){
      case 'completed':
        setfilterTodos(Todos.filter(todo=>todo.completed===true))
        break;
        case 'uncompleted':
          setfilterTodos(Todos.filter(todo=>todo.completed===false))
          break;
          default:
            setfilterTodos(Todos);
            break;
    }
  }
const saveLocalTodos=()=>{
    localStorage.setItem("Tudos",JSON.stringify([Todos]))
}

const getLocalTodo=()=>{
  if(localStorage.getItem("Todos")===null){
    localStorage.setItem("Tudos",JSON.stringify([]))
}else{
  let todoLocal = JSON.parse(localStorage.getItem('Todos'))
  console.log(todoLocal)
  setTodos(todoLocal)
}
}

  return (
    <div className="App">
      <header><h1>ToDO List</h1></header>
      <Form
      inputText={inputText}
      setinputText={setinputText}
      Todos={Todos}
      setTodos={setTodos}
      status={status}
      setstatus={setstatus}
      ></Form>
      <ToDoList Todos={Todos} setTodos={setTodos}
      filterTodos={filterTodos}></ToDoList>
    </div>
  );
}   

export default App;
