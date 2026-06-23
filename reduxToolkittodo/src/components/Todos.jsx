import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <div>
      <h2 className="text-2xl font-semibold text-emerald-700 mb-6">Your Todos</h2>
      
      {todos.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-emerald-500 text-lg">No todos yet. Add one to get started! 🚀</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gradient-to-r from-emerald-50 to-lime-50 border-l-4 border-emerald-500 rounded-lg p-4 hover:shadow-md transition-all duration-200 group"
            >
              <span className="text-emerald-900 font-medium flex-1 break-words">{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="ml-4 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-lg transition-all duration-200 transform hover:scale-110 flex-shrink-0 opacity-0 group-hover:opacity-100"
                title="Delete todo"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
      
      {todos.length > 0 && (
        <div className="mt-6 pt-4 border-t border-emerald-200">
          <p className="text-emerald-600 text-sm">
            <span className="font-semibold text-emerald-700">{todos.length}</span> {todos.length === 1 ? 'todo' : 'todos'} pending
          </p>
        </div>
      )}
    </div>
  )
}

export default Todos