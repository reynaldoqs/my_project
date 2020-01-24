import React from 'react'
import { fetchCompletedTodos } from './endpoints'

const resource = fetchCompletedTodos()

const CompletedTodos = () => {
  const todos = resource.read()

  return (
    <ul className="todos completed">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default CompletedTodos