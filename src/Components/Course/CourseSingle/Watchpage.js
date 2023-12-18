// Watchpage.js
import React from 'react';
import {  useParams } from 'react-router-dom';
import { lessons } from '../../../datalesson';
import LessonofCourse from './LessonofCourse';
import "./Coursesingle.css"

function Watchpage() {
  const { id } = useParams();
  const lesson = findLessonById(id);


  return (
    <> <div className='container watchingvideo'>
   
    <div  className='videolesson'>
    <div className='video-container'>
      <iframe className='videoplay'
        title={lesson.title}
        width='880'
        height='515'
        src={lesson.videoURL}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
      ></iframe>
    </div>
    <div className='ListofCoursevideo'>
    <LessonofCourse />
    </div>
    </div>
    <h2>{lesson.title}</h2>
  </div>
  </>
   
  );
}

export default Watchpage;

function findLessonById(lessonId) {
  // Search for the lesson in all courses
  const allLessons = Object.values(lessons).flat();
  return allLessons.find((lesson) => lesson.id.toString() === lessonId);
}
