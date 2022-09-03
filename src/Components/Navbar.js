import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <nav id="navbar">
        <ul>
            <li><Link to="/" className='btn-a'>Home</Link></li>
            <li><Link to="/contact" className='btn-a'>Contact</Link></li>
            <li><Link to="/service" className='btn-a'>Our Services</Link></li>
        </ul>
    </nav>
  )
}
