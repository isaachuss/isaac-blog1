import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Components/post'

const posts = [{ descricao: "bopopopopopopo", nome: "Isaac", data: "04/03/2009" },
{ descricao: "bipipipipipipi", nome: "Isaac1", data: "04/03/2010" },
{ descricao: "bupupupupupupu", nome: "Isaac2 ", data: "04/03/2011" }
]
const colors = ['red', 'white', 'green', 'yellow']

function App() {
  const [contador, setContador] = useState(0)


  return (
    <>
      <Post comentario={"bopopopopopopo"} nome={"Isaac"} data={"04/03/2009"} cor={'yellow' [contador]} />
      <Post comentario={"bipipipipipipi"} nome={"Isaac1"} data={"04/03/2010"} cor='green'/>
      <Post comentario={"bupupupupupupu"} nome={"Isaac2"} data={"04/03/2011"} cor='red'/>


      <div>
        <p>Total de posts: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>Aumentar posts</button>
        <button onClick={() => setContador(contador - 1)}>Diminuir posts</button>
      </div>


    </>
  )
}

export default App
