import React from 'react'

export default function Footer() {
  return (
    <footer id="footer">
        <div className="items">
        <ul>
            <li><a href="/" className='btn-a'>Home</a></li>
            <li><a href="/" className='btn-a'>Contact</a></li>
            <li><a href="/" className='btn-a'>Our Services</a></li>
        </ul>
        </div>
        <div className="address">
            <p>A-Block Gali no.-14/6 Kamal Vihar Burari Delhi-110084</p>
        </div>
        <div className="social">
        <ul>
            <li><a href="/" className='btn-a'>Whatsapp</a></li>
            <li><a href="/" className='btn-a'>Instagram</a></li>
            <li><a href="/" className='btn-a'>You Tube</a></li>
        </ul>
        </div>
    </footer>
  )
}
