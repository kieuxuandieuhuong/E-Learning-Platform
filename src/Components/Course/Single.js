// SingleCourse.js
import React from 'react';
import { courses } from '../../data';
import { useParams } from 'react-router-dom';
import Courseinfor from './CourseSingle/Courseinfor';

const Single = () => {
  const { id } = useParams();

  // Combine all course arrays into one
  const allCourses = [
    ...courses.popularcourse,
    ...courses.uiUxCourses,
    ...courses.businessAnalysisCourses,
    ...courses.dataAnalysisCourses,
    ...courses.frontEndCourses,
    ...courses.backendcourses,
  ];

  // Find the course by id
  const course = allCourses.find((course) => course.id.toString() === id);


  return (
    <>
      {course ? (
        <div>
          <Courseinfor course={course} />
          
        </div>
      ) : (
        <p>Course not found</p>
      )}
     
    </>
  );
};

export default Single;
