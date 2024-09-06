import React from 'react'
import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'

const App = () => {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "7/9/2024",
    },
    {
      name: "Go to College",
      dueDate: "7/9/2024",
    }
  ]
  return (
    <center className='todo-container'>
      <AppName />
      <AddTodo />
      <div className='items-container'>
        <TodoItems todoItems={todoItems}/>
      </div>
    </center>
  )
}

export default App