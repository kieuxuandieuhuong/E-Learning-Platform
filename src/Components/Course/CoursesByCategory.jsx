// CoursesByCategory.js
import React from 'react';
import { courses } from '../../data';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import { IoTimeOutline } from 'react-icons/io5';
import { CiVideoOn } from 'react-icons/ci';
import Star from './Star';


const CoursesByCategory = ({ category }) => {
  let course;
  switch (category) {
    case 'UI/UX':
      course = courses.uiUxCourses;
      break;
    case 'Business Analysis':
      course = courses.businessAnalysisCourses;
      break;
    case 'Data Analysis':
      course = courses.dataAnalysisCourses;
      break;
    case 'Front-End':
      course = courses.frontEndCourses;
      break;
    case 'Back-End':
      course = courses.backendCourses; // Chú ý sửa lại tên biến cho đúng
      break;
    default:
      course = [];
  }
  
  if (!Array.isArray(course)) {
    return (
      <section className='Courses'>
        <div className='listcourse'>
          <div className='container courses_container'>
            <h1>{category} Courses</h1>
            <p>No courses available for this category.</p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className='Courses'>
      <div className='listcourse'> 
      <div className='container courses_container'>
        <h1>{category} Courses</h1>
        <div className='courses_wrapper'>
          {course.map(({ id, imgcourse, rating, title, description, numberOfLessons, learningTime, path }) => {
            return (
              <Card className="courses_course" key={id}>
                <Link to ={`/courses/${id}`} >
                <img src={imgcourse} alt={`Course: ${title}`} className="course-image" /></Link>
                <div className="star-icon">
                  {/* {renderStars(rating)} */}
                  {Star(rating)}
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
                <span>
                  <CiVideoOn /> {numberOfLessons} Lesson
                </span>
                <span>
                  <IoTimeOutline /> {learningTime}
                </span>
                <div className='empty'>border</div>
                <Link to= {`/courses/${id} `}  className='Learning_button'>
                  Enroll Now
                </Link>
                <big>Free</big>
              </Card>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
};

// const renderStars = (rating) => {
//   const stars = [];
//   for (let i = 0; i < Math.floor(rating); i++) {
//     stars.push(<FaStar key={i} className="star-icon" />);
//   }

//   if (rating % 1 !== 0) {
//     stars.push(<FaStar key="half" className="star-icon" />);
//   }
//   return stars;
// };

export default CoursesByCategory;
