import React from 'react'
import FlextText from './FlextText'
import Cards from './Cards'
import logo from '../Images/contact.png'
import whatsapp from '../Images/whatsapp.png'
import location from '../Images/location.png'
import instagram from '../Images/instagram.png'

export default function Contact() {
  return (
    <>
        <div className='contact-first'>
                <FlextText h1="Contact Us" h2="Get in touch" button="Contact Now"/>
                <img src={logo} alt=""  className='common-images'/>
        </div>
        <div className="contact-second">
                <Cards heading="WhatsApp" btn="Contact Us" imagesrc={whatsapp} />
                <Cards heading="Location" btn="Visit us" imagesrc={location}/>
                <Cards heading="Social media" btn="Follow Us" imagesrc={instagram}/>
        </div>
    </>
  )
}
