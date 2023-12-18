import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { lessons } from '../../../datalesson';
import { BsPlayCircle } from 'react-icons/bs';

function getLessonsByCourseId(courseId) {
  const lessonsByCourseId = {
    '6': lessons.uiUxCoursesLessons,
    '8': lessons.businessAnalysisCoursesLessons,
    '10': lessons.dataAnalysisCoursesLessons,
    '1': lessons.frontEndCoursesLessons,
    '5': lessons.backendCoursesLessons,
  };

  return lessonsByCourseId[courseId] || [];
}
function LessonofCourse() {
  const { id } = useParams();
  const [courseLessons, setCourseLessons] = useState([]);

  useEffect(() => {
    setCourseLessons(getLessonsByCourseId(id));
  }, [id]);

  return (
    <div className='courselesson_container'>
      <h2>Course Lessons</h2>
      <ul className= 'lessoncard'>
        {courseLessons.map((lesson) => (
          <div className='lessoncolumn'>
          
        <NavLink to={`/lesson/${lesson.id}`} className='lessonlist'>
        <div  className='playicon'><BsPlayCircle/></div>
        <h3>{lesson.title}</h3> 
        <small>{lesson.description} </small>
        
        </NavLink>
          
          </div>
        ))}
      </ul>
    </div>
  );
}

export default LessonofCourse;

