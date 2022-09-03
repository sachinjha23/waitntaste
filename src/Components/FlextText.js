import React from 'react'
import {Link} from 'react-router-dom'
export default function FlextText(props) {
  return (
   <div className='flex-text'>
        <h2>{props.h2}</h2>
        <h1>{props.h1}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore natus inventore illum cum vero in.</p>
        <Link to="/" className="btn-a filled-a">{props.button}</Link>
   </div>
  )
}
