import React from 'react'
import { useState } from 'react'

const App = () => {

  const [color, setColor] = useState("olive")


  return (
    <>
      <div
        className='w-full h-screen duration-200'
        style={{ backgroundColor: color }}
      >
        <div
          className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'
        >
          <div
            className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'
          >
            <button
              onClick={() => setColor("grey")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "grey" }}
            >light blue</button>
            <button
              onClick={() => setColor("skyblue")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "skyblue" }}
            >sky blue</button>
            <button
              onClick={() => setColor("lightpink")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "lightpink" }}
            >Light pink</button>
            <button
            onClick={() => setColor("lightgreen")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "green" }}
            >green</button>
            <button
            onClick={() => setColor('blue')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "blue" }}
            >blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App