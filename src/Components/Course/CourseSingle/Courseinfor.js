import React from 'react'
import { Link } from 'react-router-dom';
import "./Coursesingle.css"
import { CiVideoOn } from 'react-icons/ci';
import { IoTimeOutline } from 'react-icons/io5';
import { FaRegPlayCircle } from 'react-icons/fa';

function Courseinfor({course}) {
 
  return (
    <section>
    <div className='container courseinfo_container'>
      <div className=' courseinfor-left'>
      <h1 className='coursetitleinfor'>{course.title}</h1>
      <p>{course.description}</p>
      </div>
      <div className=' courseinfor-right'>
        <div className='backgroundimg'>
        <img src={course.imgcourse} alt={`Course: ${course.title}`} className="courseimage" />
        <FaRegPlayCircle />
        </div>
      <big>Free</big>
      <span><CiVideoOn /> {course.numberOfLessons} Lesson </span>
       <span><IoTimeOutline />{course.learningTime}  </span>
      <Link to={`lesson${course.path}`} className='Learning_button'>  Enroll Now  </Link>
      </div>
      </div>
    </section>
  )
}

export default Courseinfor