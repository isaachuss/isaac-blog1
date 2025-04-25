import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='titulo_div'>
        <h1 className='titulo'>Isaac Blog</h1>
      </div>
      <div className='div'>
        <div className='div_bolanome'>
        <div className='bola'></div>
        <h2>Isaac</h2>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut laoreet risus. Ut est felis, hendrerit bibendum laoreet quis, rutrum et eros. Vivamus ultrices ex at vulputate hendrerit. Etiam turpis elit, aliquam nec venenatis quis, gravida volutpat nulla. Ut ullamcorper semper est, sit amet porttitor augue convallis non. Praesent fringilla non lectus sed lobortis. Nunc sagittis tellus a ante sagittis accumsan. Donec hendrerit volutpat arcu et efficitur. Cras luctus leo eu lectus egestas, et viverra nibh porttitor. Integer vel lorem id diam commodo ullamcorper.</p>
        <h4>04/03/2009 11:30</h4>
      </div>
    </>
  )
}

export default App
