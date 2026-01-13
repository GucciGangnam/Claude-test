import { useState } from 'react'
import './App.css'

function App() {
  const [pressed, setPressed] = useState(false)

  return (
    <div>
      <h1>hello world</h1>
      <button onClick={() => setPressed(true)}>press</button>
      {pressed && <p>thank you</p>}
    </div>
  )
}

export default App
