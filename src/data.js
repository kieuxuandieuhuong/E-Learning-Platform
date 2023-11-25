// Education Website Links
export const links = [
    {
        name: "Courses",
        path: '/courses'
    },
    {
        name: "Learning Paths",
        path: '/learning-paths'
    },
    {
        name: "Users",
        path: '/users'
    },
    {
        name: "Enrollments",
        path: '/enrollments'
    },
    {
        name: "Lesson Details",
        path: '/lessons'
    },
    {
        name: "Course Paths",
        path: '/course-paths'
    },
]


export const courses = [
    {
        id: 1,
        title: "Introduction to Programming",
        description: "Learn the basics of programming and coding.",
        numberOfLessons: 10,
        learningTime: "4 weeks"
    },
    {
        id: 2,
        title: "Web Development Fundamentals",
        description: "Explore the foundational concepts of web development.",
        numberOfLessons: 8,
        learningTime: "3 weeks"
    },
    {
        id: 3,
        title: "Data Science Essentials",
        description: "An introduction to data science and analysis.",
        numberOfLessons: 12,
        learningTime: "5 weeks"
    },
    {
        id: 4,
        title: "Mobile App Development",
        description: "Create mobile applications for iOS and Android.",
        numberOfLessons: 15,
        learningTime: "6 weeks"
    },
    {
        id: 5,
        title: "Cybersecurity Basics",
        description: "Understand the fundamentals of cybersecurity.",
        numberOfLessons: 10,
        learningTime: "4 weeks"
    }
]

export const testimonials = [
    {
        id: 1,
        name: "Alice Johnson",
        quote: "I thoroughly enjoyed the Introduction to Programming course. The content was well-structured and easy to follow.",
        job: "Student",
        avatar: require("./Images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Bob Smith",
        quote: "The Web Development Fundamentals course provided me with a solid foundation for building websites. Highly recommended!",
        job: "Web Developer",
        avatar: require("./Images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Charlie Brown",
        quote: "Data Science Essentials helped me kickstart my career in data analysis. The lessons were practical and engaging.",
        job: "Data Analyst",
        avatar: require("./Images/avatar3.jpg")
    },
    {
        id: 4,
        name: "David Miller",
        quote: "Mobile App Development course gave me the skills to create my own apps. The hands-on projects were fantastic!",
        job: "App Developer",
        avatar: require("./Images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Eva Davis",
        quote: "Cybersecurity Basics provided valuable insights into securing digital assets. A must for anyone interested in cybersecurity.",
        job: "Security Analyst",
        avatar: require("./Images/avatar5.jpg")
    }
]
// Education Website User Data
export const users = [
    {
        UserID: 1,
        Username: "john_doe",
        Password: "password123",
        Email: "john@example.com",
        FirstName: "John",
        LastName: "Doe"
    },
    {
        UserID: 2,
        Username: "alice_smith",
        Password: "alice123",
        Email: "alice@example.com",
        FirstName: "Alice",
        LastName: "Smith"
    },
    {
        UserID: 3,
        Username: "bob_jones",
        Password: "bob123",
        Email: "bob@example.com",
        FirstName: "Bob",
        LastName: "Jones"
    },
    {
        UserID: 4,
        Username: "sara_miller",
        Password: "sara123",
        Email: "sara@example.com",
        FirstName: "Sara",
        LastName: "Miller"
    },
    {
        UserID: 5,
        Username: "david_lee",
        Password: "david123",
        Email: "david@example.com",
        FirstName: "David",
        LastName: "Lee"
    },
]

// Education Website Enrollment Data
export const enrollments = [
    {
        EnrollmentID: 1,
        UserID: 1,
        CourseID: 1,
        EnrollmentDate: "2023-01-01"
    },
    {
        EnrollmentID: 2,
        UserID: 2,
        CourseID: 3,
        EnrollmentDate: "2023-02-15"
    },
    {
        EnrollmentID: 3,
        UserID: 3,
        CourseID: 2,
        EnrollmentDate: "2023-03-10"
    },
    {
        EnrollmentID: 4,
        UserID: 4,
        CourseID: 4,
        EnrollmentDate: "2023-04-20"
    },
    {
        EnrollmentID: 5,
        UserID: 5,
        CourseID: 5,
        EnrollmentDate: "2023-05-05"
    },
]

// Education Website Learning Path Data
export const learningPaths = [
    {
        PathID: 1,
        Path: "/foundational-paths",
        Name: "Foundational Paths",
        Description: "Paths for building foundational knowledge."
    },
    {
        PathID: 2,
        Path: "/advanced-paths",
        Name: "Advanced Paths",
        Description: "Paths for advanced topics and skills."
    },
    {
        PathID: 3,
        Path: "/specialized-paths",
        Name: "Specialized Paths",
        Description: "Paths focused on specific domains or industries."
    },
    {
        PathID: 4,
        Path: "/programming-paths",
        Name: "Programming Paths",
        Description: "Paths dedicated to programming languages and paradigms."
    },
    {
        PathID: 5,
        Path: "/data-science-paths",
        Name: "Data Science Paths",
        Description: "Paths for mastering data science and analytics."
    },
]

// Education Website Lesson Data
export const lessons = [
    {
        LessonID: 1,
        CourseID: 1,
        Title: "Introduction to Programming Concepts",
        Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
        Order: 1
    },
    {
        LessonID: 2,
        CourseID: 1,
        Title: "Variables and Data Types",
        Content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        Order: 2
    },
    {
        LessonID: 3,
        CourseID: 2,
        Title: "Web Development Basics",
        Content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        Order: 1
    },
    {
        LessonID: 4,
        CourseID: 3,
        Title: "Data Analysis Techniques",
        Content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        Order: 3
    },
    {
        LessonID: 5,
        CourseID: 4,
        Title: "Mobile App Design Principles",
        Content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        Order: 2
    },
]

// Education Website Course Path Data
export const coursePaths = [
    {
        CoursePathID: 1,
        CourseID: 1,
        PathID: 1,
        Order: 1
    },
    {
        CoursePathID: 2,
        CourseID: 2,
        PathID: 2,
        Order: 2
    },
    {
        CoursePathID: 3,
        CourseID: 3,
        PathID: 3,
        Order: 1
    },
    {
        CoursePathID: 4,
        CourseID: 4,
        PathID: 4,
        Order: 2
    },
    {
        CoursePathID: 5,
        CourseID: 5,
        PathID: 5,
        Order: 1
    },
]
