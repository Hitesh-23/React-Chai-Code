import { useState } from 'react'
import Card2 from './components/Card.jsx'


function App() {
  const [count, setCount] = useState(0)

  let user = {
    username: 'Hitesh',
    age: 24
  }

  return (
    <>
    <Card2 username="Raja" btnText="Click me"/>
    <Card2 username="Sanjay" btnText="Open me"/>
    </>
  )
}

export default App
