import React from 'react'
import "./About.css"
import Footer from '../Home/Footer'
import { Aboutus } from '../../datahome'
import posterimg from "../../Images/poster.png" 

const About = () => {
  return (

    <>
    <div className="container about-container">
    <h1 className='abouth1'>About Us </h1>
    <h4 className='abouth4'>Welcome to Bee Plus Academy!</h4>
      <div className='aboutcontent'>
      <div className="column">
        <p className='aboutuscontent'>
Bee Plus Academy is your gateway to high-quality, accessible online learning in the field of Information Technology. 
Our mission is to provide a diverse range of courses, curated from reputable sources worldwide, 
to help learners acquire the latest knowledge and skills in IT. We are committed to delivering top-notch education with a focus on learner outcomes.
At Bee Plus Academy, we believe in the power of education to transform careers. 
Join us on a journey of advanced and innovative learning, where knowledge is shared transparently and completely free of charge.
 Bee Plus Academy is your golden opportunity for personal and professional growth in the vibrant IT community of Vietnam.</p>
        {Aboutus.map((items) => (
          <div key={items.id} className='idabout'>
            <span className='abouticon'><items.icon /></span>
            <h5 className='titleitem'>{items.title}</h5>
            <p className='numberitem'> {items.sol} </p>
            </div>
        ))}
      </div>
      <div className="column">
      <img src={posterimg} alt='poster' className='imagepos' />
      </div>
       </div>
      </div>
     

     
       
      
      
    <Footer />
  </>
  )
}

export default About