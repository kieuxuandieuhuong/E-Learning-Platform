import React from 'react';
import { Link } from 'react-router-dom';
import './Coursesingle.css';
import { FaPlayCircle } from 'react-icons/fa';
import { BsSortUpAlt,BsPlayCircle,BsClock } from "react-icons/bs";

function Courseinfor({ course }) {


  return (
    <section>
      <div className="container courseinfo_container">
        <div className="courseinfor-left">
          <h1 className="coursetitleinfor">{course.title}</h1>
          <big>Free</big>
          <p>{course.description}</p>
          <ul className="listsentence">
            <li>Understand key course concepts.</li>
            <li>Apply knowledge with hands-on exercises.</li>
            <li>Learn optimization techniques.</li>
            <li>Gain skills in integrating external services.</li>
            <li>Understand the workflow of the subject.</li>
            <li>Engage in a practical project application.</li>
            <li>Learn deployment on platforms like GitHub/GitLab.</li>
          </ul>
        </div>
        <div className="courseinfor-right">
          <div className="backgroundimg">
        <div className="image-container">
              <img src={course.imgcourse} alt={`Course: ${course.title}`} className="courseimage" />
            </div>
            <FaPlayCircle className='iconplay'/>
            </div>
            
          <div className='Free-content'>
          <div className='icon-list'>
            <li> <BsSortUpAlt  className="iconvideo"/> Basic level </li>
          <li> <BsPlayCircle  className='iconvideo'/> {course.numberOfLessons} Lesson{' '}  </li>
          <li> <BsClock className='iconvideo'/> {course.learningTime}{' '}</li>
         
          </div>
          </div>
          <Link to={`lesson/:id`} className="Enrollbtn">
            Enroll Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Courseinfor;
