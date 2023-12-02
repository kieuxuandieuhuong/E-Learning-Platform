import React from 'react'
import { Link } from 'react-router-dom';
import Image from '../../Images/introduction.png';
const Information = () => {
  return (
    <div className='Infor'>
    <div className='container infor-container'>
        <div className='infor-left'>
        <div className='infor-image'>
            <img src={Image} alt ='infor Image'/>
        </div>
        </div>
        <div className='infor-right'>
            <h1>
             Why choose us?
            </h1>
            <p>
            We believe that the inspiration and deep expertise of our instructors will be a significant source of motivation for your successful learning.
            </p>
            <ul>
                <li>Effectiveness</li>
                <li>Expertise</li>
            <br></br>
            </ul>
            <ul>
                <li>Experienced</li>
                <li>Professional guidance</li>
                <br></br>
            </ul>
            <Link to ='/courses' className='Startlearning_button'> Start Learning</Link>
        </div>
    </div>
    </div>
  )
}

export default Information