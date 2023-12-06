import React from 'react';
import CoursesByCategory from './CoursesByCategory';
import "./Course.css";
import Popular from '../Home/Popular';
import Footer from '../Home/Footer';

const Course = () => {
  return (
    <>
      <CoursesByCategory category="UI/UX" />
      <CoursesByCategory category="Business Analysis" />
      <CoursesByCategory category="Data Analysis" />
      <CoursesByCategory category="Front-End" />
      <CoursesByCategory category="Back-End" />
      <Popular />
      <Footer />
    </>
  );
}

export default Course;
