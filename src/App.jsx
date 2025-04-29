import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Components/post'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Post comentario={"popopopopopopo"}/>
     <Post comentario={"pipipipipipipi"}/>
    </>
  )
}

export default App
