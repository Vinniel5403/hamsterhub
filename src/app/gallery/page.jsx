import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GallerySlider from './components/Gallery'
import './Gallery.css'

function page() {
  return (
    <div className='gallery'>
        <Navbar/>
        <GallerySlider/>
        <Footer/>
        </div>
  )
}

export default page