import React from 'react'
import Header from './Header'
import './Home.css'
import Information from './Information'
import Popular from './Popular'
import Testimonials from './Testimonials'
import Footer from "./Footer"

const Home = () => {
  return (
    <>
    <Header />
    <Information />
    <Popular />
    <Testimonials />
    <Footer />
    </>
    
  )
}

export default Home;