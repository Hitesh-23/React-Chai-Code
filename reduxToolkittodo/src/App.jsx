import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-lime-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-emerald-700 mb-2">Redux Toolkit Todo</h1>
          <p className="text-lg text-emerald-600">Stay organized with our beautiful todo app</p>
        </div>

        {/* Add Todo Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-emerald-100">
          <AddTodo />
        </div>

        {/* Todos Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-emerald-100">
          <Todos />
        </div>
      </div>
    </div>
  )
}

export default App