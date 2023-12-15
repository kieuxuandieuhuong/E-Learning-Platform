import React from 'react';
import { useParams } from 'react-router-dom';
import { lessons } from '../../../datalesson';
import { BsPlayCircle } from 'react-icons/bs';

function LessonList() {
  const { id } = useParams();

  const getLessonsByCourseId = (courseId) => {
    switch (courseId) {
      case '6':
        return lessons.uiUxCoursesLessons;
      case '8':
        return lessons.businessAnalysisCoursesLessons;
      case '10':
        return lessons.dataAnalysisCoursesLessons;
      case '1':
        return lessons.frontEndCoursesLessons;
      case '5':
        return lessons.backendCoursesLessons;
      default:
        return [];
    }
  };

  const courseLessons = getLessonsByCourseId(id);

  return (
    <div className='container courselesson_container'>
      <h2>Course Lessons</h2>
      <ul className= 'lessoncard'>
        {courseLessons.map((lesson) => (
          <div className='lessoncolumn'>
          <li className='lessonlist' key={lesson.id}>
            <a href={lesson.videoURL} target="_blank" rel="noopener noreferrer">
             {lesson.title}
             <span className='lessonlisticon'><BsPlayCircle/></span>
             <small>{lesson.description} </small>
            </a>
          </li>
          <div className='emptystyle'></div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default LessonList;
