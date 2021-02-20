import React from 'react'

function Form({inputText,setinputText,Todos,setTodos,setstatus}) {
  const inputTextHandler=(e)=>{
    setinputText(e.target.value)
  }
 const handleSubmit=(e)=>{
   e.preventDefault()
   setTodos([
     ...Todos,{text:inputText,completed:false,id:Math.random()*1000}
   ])
   setinputText("")
 }
 const statusHandler=(e)=>{
  setstatus(e.target.value)
 }
  return (
    <div>
      <form>
      <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
      <button onClick={handleSubmit} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    </div>
  )
}

export default Form
