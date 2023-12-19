import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Coursesingle.css';
import { BsSortUpAlt,BsPlayCircle,BsClock } from "react-icons/bs";
import LessonofCourse from './LessonofCourse';
import CourseRate from './CourseRate';
import ReactStars from 'react-stars';

function Courseinfor({ course }) {

  const [learncourse, setlearncourse] =useState (true);

  return (
    <section>
      <div className="container courseinfo_container">
        <div className="courseinformation-left">
          <div className='courseinformation'> 
          <h1 className="coursetitleinfor">{course.title}</h1>
          
          <big>Free</big>
          <div><div className='containerreviews'>
      <div className='reivewcontent'>
        <div className='ratingstars'>
        <ReactStars
        count={5}
        value={4}
        edit ={false}
        size={24}
        color2={'#ffd700'} />
  <span><a className='' href='#review' > (2 Reviews )</a></span>
  </div> 
  </div>
        </div></div>
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
          <div className='lessonofcoursepart'><LessonofCourse /></div> 
          <div className='courseratepart'><CourseRate /></div>
        </div>
        <div className="courseinformation-right">
          <div className="cardcourseinfor">
          <div className="backgroundimg">
              <img src={course.imgcourse} alt={`Course: ${course.title}`} className="courseimage" /></div>
            
          <div className='icon-list'>
            <li> <BsSortUpAlt  className="iconvideo"/> Basic level </li>
          <li> <BsPlayCircle  className='iconvideo'/> {course.numberOfLessons} Lesson{' '}  </li>
          <li> <BsClock className='iconvideo'/> {course.learningTime}{' '}</li>
          </div>
          
          <Link to={`/Login`} className="Enrollbtn">
            Enroll Now
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Courseinfor;
