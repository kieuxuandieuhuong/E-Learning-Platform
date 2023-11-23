// data.js

// Sample data for the User table
export const userData = [
    { UserID: 1, Username: 'user1', Password: 'password1', Email: 'user1@email.com', FirstName: 'John', LastName: 'Doe' },
    { UserID: 2, Username: 'user2', Password: 'password2', Email: 'user2@email.com', FirstName: 'Jane', LastName: 'Smith' },
    // Add more users as needed
  ];
  
  // Sample data for the Course table
  export const courseData = [
    { CourseID: 1, Title: 'Introduction to SQL', Description: 'Learn the basics of SQL', NumberofLesson: 5 },
    { CourseID: 2, Title: 'Web Development Fundamentals', Description: 'Fundamental concepts of web development', NumberofLesson: 8 },
    // Add more courses as needed
    { CourseID: 3, Title: 'JavaScript Fundamentals', Description: 'Learn the basics of JavaScript', NumberofLesson: 10 },
    { CourseID: 4, Title: 'Python for Beginners', Description: 'Introduction to Python programming', NumberofLesson: 7 },
    { CourseID: 5, Title: 'Data Science Essentials', Description: 'Foundations of Data Science', NumberofLesson: 12 },
    { CourseID: 6, Title: 'Machine Learning Basics', Description: 'Introduction to Machine Learning', NumberofLesson: 8 },
    { CourseID: 7, Title: 'Frontend Web Development', Description: 'Building user interfaces with HTML, CSS, and JS', NumberofLesson: 15 },
    { CourseID: 8, Title: 'Backend Web Development', Description: 'Building server-side applications with Node.js', NumberofLesson: 12 },
    { CourseID: 9, Title: 'Mobile App Development', Description: 'Creating mobile apps with React Native', NumberofLesson: 10 },
    { CourseID: 10, Title: 'Cloud Computing Basics', Description: 'Introduction to cloud computing concepts', NumberofLesson: 6 },
  ];
  
  // Sample data for the LearningPath table
  export const learningPathData = [
    { PathID: 1, Path: 'SQL Path', Name: 'SQL Mastery', Description: 'Become an expert in SQL' },
    { PathID: 2, Path: 'Web Development Path', Name: 'Web Dev Pro', Description: 'Master web development skills' },
    // Add more learning paths as needed
  ];
  
  // Sample data for the Enrollment table
  export const enrollmentData = [
    { EnrollmentID: 1, UserID: 1, CourseID: 1, EnrollmentDate: '2023-01-01', CompletionStatus: 'in progress' },
    { EnrollmentID: 2, UserID: 1, CourseID: 2, EnrollmentDate: '2023-02-01', CompletionStatus: 'completed' },
    { EnrollmentID: 3, UserID: 2, CourseID: 1, EnrollmentDate: '2023-03-01', CompletionStatus: 'in progress' },
    // Add more enrollments as needed
  ];
  
  // Sample data for the CoursePath table
  export const coursePathData = [
    { CoursePathID: 4, CourseID: 3, PathID: 1, Order: 2 },
    { CoursePathID: 5, CourseID: 4, PathID: 2, Order: 1 },
    { CoursePathID: 6, CourseID: 5, PathID: 2, Order: 2 },
    { CoursePathID: 7, CourseID: 6, PathID: 1, Order: 3 },
    { CoursePathID: 8, CourseID: 7, PathID: 1, Order: 4 },
    { CoursePathID: 9, CourseID: 8, PathID: 1, Order: 5 },
    { CoursePathID: 10, CourseID: 9, PathID: 1, Order: 6 },
    { CoursePathID: 11, CourseID: 10, PathID: 2, Order: 3 },
    // Add more course paths as needed
  ];
  
  // Sample data for the CourseProgress table
  export const courseProgressData = [
    { CourseID: 3, UserID: 1, LessonID: 4 },
    { CourseID: 3, UserID: 1, LessonID: 5 },
    { CourseID: 4, UserID: 2, LessonID: 6 },
    { CourseID: 4, UserID: 2, LessonID: 7 },
    { CourseID: 5, UserID: 1, LessonID: 8 },
    { CourseID: 5, UserID: 1, LessonID: 9 },
    { CourseID: 6, UserID: 2, LessonID: 10 },
    { CourseID: 6, UserID: 2, LessonID: 11 },
    { CourseID: 7, UserID: 1, LessonID: 12 },
    { CourseID: 7, UserID: 1, LessonID: 13 },
    { CourseID: 8, UserID: 2, LessonID: 14 },
    { CourseID: 8, UserID: 2, LessonID: 15 },
    { CourseID: 9, UserID: 1, LessonID: 16 },
    { CourseID: 9, UserID: 1, LessonID: 17 },
    { CourseID: 10, UserID: 2, LessonID: 18 },
    { CourseID: 10, UserID: 2, LessonID: 19 },
    // Add more course progress as needed
  ];
  