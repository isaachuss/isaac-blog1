import React from 'react'
import './Post.css'


function Post({ comentario, nome, data, cor }) {
  return (

    <div>
      <div className='titulo_div'>
        <h1 className='titulo'>Isaac Blog</h1>
      </div>
      <div className='div' style={{background:cor}}>
        <div className='div_bolanome'>
          <div className='bola'></div>
          <h2>{nome}</h2>
        </div>
        <p>{comentario}</p>
        <h4>{data} 11:30</h4>
      </div>
    </div>

  )
}
export default Post