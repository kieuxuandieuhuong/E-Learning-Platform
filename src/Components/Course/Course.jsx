import React, { useEffect,useState } from 'react';
import CoursesByCategory from './CoursesByCategory';
import "./Course.css";
import Footer from '../Home/Footer';
import SearchBar from './search';
import Coursecate from './Coursecate';
import { useDispatch, useSelector } from 'react-redux';
import { getCourse } from '../../Feature/course/courseSlice';


const Course = () => {
  const dispatch = useDispatch()
  const [course,setCourse] = useState("");
  const courseState = useSelector((state) => state.course.course);
  const getAllCourse = () => {
    dispatch(getCourse())
  }
  useEffect(()=>{
    getAllCourse()
  },[])
  return (
    <>
      <div className="container small-navbar">
        <Coursecate />
        <SearchBar />
      </div>
      

     <div className='content-category'>
      <CoursesByCategory data ={courseState} category="UI/UX" />
      <CoursesByCategory category="Business Analysis" />
      <CoursesByCategory category="Data Analysis" />
      <CoursesByCategory category="Front-End" />
      <CoursesByCategory category="Back-End" />
      </div> 
    </>
  );
}

export default Course;
