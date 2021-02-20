import React from 'react'
import Todo from './Todo'

function ToDoList({Todos,setTodos,filterTodos}) {
  return (
  <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map(todo=>(
          <Todo text={todo.text} 
          key={todo.id}
          Todos={Todos}
          todo={todo}
          setTodos={setTodos}
          ></Todo>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList
