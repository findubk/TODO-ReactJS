import React from 'react'

function Todo({text,Todos,setTodos,todo}) {
  const handleDelete=()=>{
    setTodos(Todos.filter((el)=>el.id!==todo.id));
  };

  const CompleteHandler=()=>{
    setTodos(Todos.map(item=>{
      if(item.id == todo.id){
        return{
          ...item,completed:!item.complete
        }
      }
      return item; 
    }))
  }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed?"completed":""}`}>{text}</li>
      <button onClick={CompleteHandler}  className="complete-btn"
      ><i className="fas fa-check"></i></button>
      <button onClick={handleDelete} className="trash-btn"
      ><i className="fas fa-trash"></i></button>
    </div>
  )
}

export default Todo
