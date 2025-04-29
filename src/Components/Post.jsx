import React from 'react'
import './Post.css'


function Post({comentario}) {
    return (
      
    <div>
        <div className='titulo_div'>
        <h1 className='titulo'>Isaac Blog</h1>
      </div>
      <div className='div'>
        <div className='div_bolanome'>
        <div className='bola'></div>
        <h2>Isaac</h2>
        </div>
        <p>{comentario}</p>
        <h4>04/03/2009 11:30</h4>
      </div>
      </div>
      
    )
}
export default Post