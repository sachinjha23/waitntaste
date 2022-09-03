import React from 'react'
import FlextText from './FlextText'
import logo from '../Images/home.png'


export default function HomeFirst() {
  return (
    <div className='home-first'>
        <FlextText h1="Web Solutions" h2="Welcome To" button="Explore More"/>
        <img src={logo} alt="" className='common-images'/>
    </div>
  )
}
