import { uiUxCourses, businessAnalysisCourses, dataAnalysisCourses, frontEndCourses, backendcourses } from '../../data';

function Coursename () {

      const searchResults = uiUxCourses.filter(course =>
        course.title.toLowerCase().includes(searchTerm)
    );

    return(
        <div className="namecourse"> </div>
    )
  }