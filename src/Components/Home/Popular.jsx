import React from 'react';
import { courses } from '../../data';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import { IoTimeOutline } from 'react-icons/io5';
import { CiVideoOn } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa'; // Import star icon from react-icons/fa



const Popular = () => {
  return (
    <section className='courses'>
      <div className='container courses_container'>
        <h1>Popular Course</h1>
        <div className='courses_wrapper'>
          {courses.map(({ id,imgcourse, rating, title, description, numberOfLessons, learningTime, path }) => {
            return (
              <Card className="courses_course" key={id}>
                <img src={imgcourse} alt={`Course: ${title}`} className="course-image" />
                <div className="rating">
                  {renderStars(rating)}
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
                <span>
                  <CiVideoOn /> {numberOfLessons} Lesson
                  </span>
                  <span>
                  <IoTimeOutline />{learningTime}
                </span>
                <div className='empty'>border</div>
                <Link to={path} className='Learning_button'>
                  Enroll Now
                </Link>
                <big>Free</big>
              </Card>
            );
          })}
        </div>
        <Link to ='/courses' className='Explore'>Explore all Courses</Link>
      </div>
    </section>
  );
};

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<FaStar key={i} className="star-icon" />);
  }

  if (rating % 1 !== 0) {
    stars.push(<FaStar key="half" className="star-icon" />);
  }
  return stars;
};

export default Popular;