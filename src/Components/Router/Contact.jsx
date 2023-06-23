import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Contact() {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/home')
    }
  return (
    <div className='container'>
      <h1>Conatct Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At architecto sed aliquam nemo omnis nam, consequatur in consectetur ducimus amet voluptatem totam nostrum cum eveniet quam rerum sunt ratione sint?</p>


      <button className='btn btn-warning' onClick={handleClick}>Go To Home</button>
    </div>
  )
}
