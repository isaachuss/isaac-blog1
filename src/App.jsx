import { useState } from 'react'
import './App.css'
import Post from './Components/post'
import ButtonAlert from './Components/ButtonAlert'

const posts = [{ descricao: "bopopopopopopo", nome: "Isaac", data: "04/03/2009" },
{ descricao: "bipipipipipipi", nome: "Isaac1", data: "04/03/2010" },
{ descricao: "bupupupupupupu", nome: "Isaac2 ", data: "04/03/2011" }
]
const colors = ['red', 'white', 'green', 'yellow']

function App() {
  const [contador, setContador] = useState(0)
  

  return (
    <>
      <Post comentario={"bopopopopopopo"} nome={"Isaac"} data={"04/03/2009"} cor='yellow'/>
      <Post comentario={"bipipipipipipi"} nome={"Isaac1"} data={"04/03/2010"} cor='green'/>
      <Post comentario={"bupupupupupupu"} nome={"Isaac2"} data={"04/03/2011"} cor='red'/>


      <div>
        <p>Total de posts: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>Aumentar posts</button>
        <button onClick={() => setContador(contador - 1)}>Diminuir posts</button>
        <button onClick={() => alert('Agora você sabe mais')}>Saiba mais</button>
        <ButtonAlert mensagem={"alerta 2"}> Alerta </ButtonAlert>
      </div>


    </>
  )
}

export default App
