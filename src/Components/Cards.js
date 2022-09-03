import React from 'react'
// import PropTypes from 'prop-types'



export default function Cards(props) {
  return (
    <div className='card-body'>
        <img src={props.imagesrc} alt="" className="card-img"/>
        <h3>{props.heading}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptas.</p>
        <a href="/" className="btn-a filled-a">{props.btn}</a>
    </div>
  )
}
