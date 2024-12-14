import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GallerySlider from './components/Gallery'
import GalleryHeader from './components/GalleryHeader'
import './Gallery.css'

function page() {
  return (
    <div className='gallery'>
        <Navbar/>
        <GalleryHeader/>
        <GallerySlider/>
        <Footer/>
        </div>
  )
}

export default page