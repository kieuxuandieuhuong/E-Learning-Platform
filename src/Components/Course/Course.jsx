import React from 'react';
import CoursesByCategory from './CoursesByCategory';
import "./Course.css";
import Popular from '../Home/Popular';
import Footer from '../Home/Footer';
import SearchBar from './search';
import Coursecate from './Coursecate';

const Course = () => {
  return (
    <>
      {/* Small Navbar */}
      <div className="container small-navbar">
        <Coursecate />
        <SearchBar />
      </div>
      
      <div className='content-category'>
      <CoursesByCategory category="UI/UX" />
      <CoursesByCategory category="Business Analysis" />
      <CoursesByCategory category="Data Analysis" />
      <CoursesByCategory category="Front-End" />
      <CoursesByCategory category="Back-End" />
      </div>
      {/* Other Components */}
      <Popular />
      <Footer />
    </>
  );
}

export default Course;
