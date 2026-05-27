import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


const anotherElement = (
  <a href="http://google.com" target='_blank'>Click me to open google</a>
)

const anotherUser = "Chai aur code"

// Custom Element Create method......
const reactElement = React.createElement(
  "a",
  {href: "http://google.com", target: "_blank"},
  "Click me to visit google",
  anotherUser
)

createRoot(document.getElementById('root')).render(
  <App />
)
