import React from 'react'
import Cards from './Cards'
import website from '../Images/website.png'
import app from '../Images/app.png'
import software from '../Images/software.png'
export default function CardSection() {
  return (
    <div className='card-section'>
        <Cards heading="Website"  btn="Explore More" imagesrc={website}/>
        <Cards heading="Android" btn="Explore More" imagesrc={app}/>
        <Cards heading="Software" btn="Explore More" imagesrc={software}/>
    </div>
  )
}
