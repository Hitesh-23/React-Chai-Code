import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (input.trim()) {
      dispatch(addTodo(input))
      setInput('')
    }
  }

  return (
    <form onSubmit={addTodoHandler} className="space-y-4">
      <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Add New Todo</h2>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          className="flex-1 bg-emerald-50 border-2 border-emerald-200 rounded-lg px-4 py-3 text-emerald-900 placeholder-emerald-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 transition-all duration-200"
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-emerald-500 to-lime-500 hover:from-emerald-600 hover:to-lime-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 whitespace-nowrap"
        >
          Add Todo
        </button>
      </div>
    </form>
  )
}

export default AddTodo