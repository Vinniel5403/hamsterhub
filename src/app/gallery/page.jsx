import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Gallery from './components/Gallery'
import './Gallery.css'

function page() {
  return (
    <div className='gallery'>
        <Navbar/>
        <Gallery/>
        <Footer/>
        </div>
  )
}

export default page