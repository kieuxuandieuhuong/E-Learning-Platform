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
        rating: 4.5,
        title: "Learn HTML and CSS for Beginners",
        description: "Providing a hands-on introduction to creating and styling web pages for those with little to no coding experience.",
        numberOfLessons: 10,
        learningTime: "4 weeks",
        path: "/program/111",
        imgcourse: require("./Images/HTMLCSS.png")
    },
    {
        id: 2,
        rating: 5.0,
        title: "Javasript from Zero",
        description: "A beginner-friendly course that takes you from ground zero to confidently mastering the essentials of JavaScript programming.",
        numberOfLessons: 8,
        learningTime: "3 weeks",
        path: "/program/222",
        imgcourse: require("./Images/java.jpg")
    },
    {
        id: 3,
        rating: 4.9,
        title: "ReactJS for Beginner",
        description: " Learn the fundamentals of building interactive user interfaces through hands-on exercises.",
        learningTime: "5 weeks",
        numberOfLessons: 15,
        path: "/program/333",
        imgcourse: require("./Images/React-js-1.png")
    },
    {
        id: 4,
        rating: 4.8,
        title: "Mobile App Development",
        description: "Master the art of Mobile App Development with our concise course for both iOS and Android platforms.",
        numberOfLessons: 15,
        learningTime: "6 weeks",
        path: "/program/444",
        imgcourse: require("./Images/mobileapp.jpg")
    },
    {
        id: 5,
        rating: 5.0,
        title: "Node & Express JS",
        description: "Discover the core concepts of Node.js and Express.js in our brief course, exploring essential JavaScript technologies.",
        numberOfLessons: 10,
        learningTime: "4 weeks",
        path: "/program/555",
        imgcourse: require("./Images/R.png")
    }
]

export const uiUxCourses = [
    // Existing courses
    {
        id: 6,
        rating: 4.7,
        title: "UI Design Fundamentals",
        description: "Master the principles of User Interface (UI) design and create visually appealing and user-friendly digital experiences.",
        numberOfLessons: 8,
        learningTime: "3 weeks",
        imgcourse: require("./Images/UIfun.jpg"),
        path: "/program/666"

    },
    {
        id: 7,
        rating: 4.6,
        title: "UX Research and Prototyping",
        description: "Dive into User Experience (UX) research methodologies and prototyping techniques to optimize your designs for user satisfaction.",
        numberOfLessons: 10,
        learningTime: "4 weeks",
        imgcourse: require("./Images/UXpro.jpg"),
        path: "/program/777"
    },
    // Additional UI/UX courses
    {
        id: 22,
        rating: 4.8,
        title: "Advanced UI Animation",
        description: "Explore advanced techniques in UI animation to enhance user engagement and create seamless interactive experiences.",
        numberOfLessons: 9,
        learningTime: "3.5 weeks",
        imgcourse: require("./Images/UX.jpg"),
        path: "/program/2222"
    },
    {
        id: 23,
        rating: 4.9,
        title: "Mobile UX Design",
        description: "Learn the principles and best practices of designing user experiences for mobile devices, focusing on responsiveness and usability.",
        numberOfLessons: 11,
        learningTime: "4 weeks",
        imgcourse: require("./Images/mobileux.jpg"),
        path: "/program/2323"
    },
    {
        id: 24,
        rating: 4.7,
        title: "Accessibility in UI/UX",
        description: "Master the art of creating inclusive designs by incorporating accessibility principles into your UI/UX projects.",
        numberOfLessons: 10,
        learningTime: "4 weeks",
        imgcourse: require("./Images/uixu.jpg"),
        path: "/program/2424"
    },
    {
        id: 25,
        rating: 4.6,
        title: "UI/UX Portfolio Building",
        description: "Create a standout portfolio showcasing your UI/UX design skills, essential for attracting clients and employers.",
        numberOfLessons: 12,
        learningTime: "5 weeks",
        imgcourse: require("./Images/pofolio.jpg"),
        path: "/program/2525"
    }
];

export const businessAnalysisCourses = [
    // Existing courses
    {
        id: 8,
        rating: 4.9,
        title: "Introduction to Business Analysis",
        description: "Learn the foundational concepts of Business Analysis, including requirements gathering, process analysis, and stakeholder communication.",
        numberOfLessons: 12,
        learningTime: "5 weeks",
        imgcourse: require("./Images/BA.png"),
        path: "/program/888"
    },
    {
        id: 9,
        rating: 4.8,
        title: "Agile Business Analysis",
        description: "Explore the role of Business Analysis in Agile environments, focusing on iterative and collaborative approaches to project management.",
        numberOfLessons: 10,
        learningTime: "4 weeks",
        imgcourse: require("./Images/Agile.jpg"),
        path: "/program/999"
    },
    // Additional Business Analysis courses
    {
        id: 26,
        rating: 4.7,
        title: "Business Process Optimization",
        description: "Learn advanced techniques for optimizing business processes through analysis, modeling, and continuous improvement strategies.",
        numberOfLessons: 9,
        learningTime: "3.5 weeks",
        imgcourse: require("./Images/process.jpg"),
        path: "/program/2626"
    },
    {
        id: 27,
        rating: 4.8,
        title: "Stakeholder Management",
        description: "Master the art of effective stakeholder management, a crucial skill for successful business analysts in various industries.",
        numberOfLessons: 11,
        learningTime: "4 weeks",
        imgcourse: require("./Images/Stake.jpg"),
        path: "/program/2727"
    },
    {
        id: 28,
        rating: 4.9,
        title: "Requirements Documentation",
        description: "Learn the essentials of documenting requirements effectively, ensuring clarity and precision in project communication.",
        numberOfLessons: 10,
        learningTime: "4 weeks",
        imgcourse: require("./Images/document.png"),
        path: "/program/2828"
    },
    {
        id: 29,
        rating: 4.7,
        title: "Use Case Modeling",
        description: "Deepen your understanding of use case modeling as a powerful tool for capturing and defining system requirements.",
        numberOfLessons: 12,
        learningTime: "5 weeks",
        imgcourse: require("./Images/usecase.jpg"),
        path: "/program/2929"
    }
];

export const dataAnalysisCourses = [
    // Existing courses
    {
        id: 10,
        rating: 4.5,
        title: "Data Analysis with Python",
        description: "Get started with data analysis using Python, covering essential libraries and techniques for extracting meaningful insights from datasets.",
        numberOfLessons: 8,
        learningTime: "3 weeks",
        imgcourse: require("./Images/demo.png"),
        path: "/program/1010"
    },
    {
        id: 11,
        rating: 4.7,
        title: "Data Visualization and Reporting",
        description: "Learn to create compelling data visualizations and reports to communicate complex information effectively ",
        numberOfLessons: 10,
        learningTime: "4 weeks",
        imgcourse: require("./Images/Data.jpg"),
        path: "/program/1111"
    },
    {
        id: 30,
        rating: 4.6,
        title: "Predictive Analytics",
        description: "Explore the principles of predictive analytics, learning how to build models that forecast future trends and outcomes based on historical data.",
        numberOfLessons: 9,
        learningTime: "3.5 weeks",
        imgcourse: require("./Images/predic.jpg"),
        path: "/program/3030"
    },
    {
        id: 31,
        rating: 4.8,
        title: "Data Cleaning and Preprocessing",
        description: "Master the art of cleaning and preprocessing data, a critical step in ensuring the accuracy and reliability of your analysis.",
        numberOfLessons: 11,
        learningTime: "4 weeks",
        imgcourse: require("./Images/cleaning.jpg"),
        path: "/program/3131"
    },
    {
        id: 32,
        rating: 4.9,
        title: "Time Series Analysis",
        description: "Deepen your understanding of time series analysis, a valuable skill for extracting insights from data that evolves over time.",
        numberOfLessons: 10,
        learningTime: "4 weeks",
        imgcourse: require("./Images/Data2.png"),
        path: "/program/3232"
    },
    {
        id: 33,
        rating: 4.7,
        title: "Advanced SQL for Data Analysis",
        description: "Enhance your SQL skills for data analysis, covering advanced techniques for querying and manipulating large datasets.",
        numberOfLessons: 12,
        learningTime: "5 weeks",
        imgcourse: require("./Images/advance.png"),
        path: "/program/3333"
    }
];

export const frontEndCourses = [
    // Existing courses
    {
        id: 1,
        rating: 4.5,
        title: "Learn HTML and CSS for Beginners",
        description: "Providing a hands-on introduction to creating and styling web pages for those with little to no coding experience.",
        numberOfLessons: 10,
        learningTime: "4 weeks",
        path: "/program/111",
        imgcourse: require("./Images/HTMLCSS.png")
    },
    {
        id: 2,
        rating: 5.0,
        title: "Javasript from Zero",
        description: "A beginner-friendly course that takes you from ground zero to confidently mastering the essentials of JavaScript programming.",
        numberOfLessons: 8,
        learningTime: "3 weeks",
        path: "/program/222",
        imgcourse: require("./Images/java.jpg")
    },
    {
        id: 3,
        rating: 4.9,
        title: "ReactJS for Beginner",
        description: " Learn the fundamentals of building interactive user interfaces through hands-on exercises.",
        learningTime: "5 weeks",
        numberOfLessons: 15,
        path: "/program/333",
        imgcourse: require("./Images/React-js-1.png")
    },
    // Additional front-end courses
    {
        id: 34,
        rating: 4.7,
        title: "Responsive Web Design ",
        description: "Explore advanced techniques in responsive web design using CSS Grid, creating flexible and dynamic layouts.",
        numberOfLessons: 9,
        learningTime: "3.5 weeks",
        path: "/program/3434",
        imgcourse: require("./Images/re.jpg")
    },
    {
        id: 35,
        rating: 4.8,
        title: "JavaScript Frameworks: Vue.js",
        description: "Dive into the Vue.js framework and learn how to build powerful and dynamic user interfaces with this popular JavaScript framework.",
        numberOfLessons: 11,
        learningTime: "4 weeks",
        path: "/program/3535",
        imgcourse: require("./Images/vue.jpg")
    },
    {
        id: 36,
        rating: 4.9,
        title: "Web Animation CSS & JavaScript",
        description: "Master the art of creating captivating animations on the web using a combination of CSS and JavaScript.",
        numberOfLessons: 10,
        learningTime: "4 weeks",
        path: "/program/3636",
        imgcourse: require("./Images/web.jpg")
    },
    {
        id: 4,
        rating: 4.8,
        title: "Mobile App Development",
        description: "Master the art of Mobile App Development with our concise course for both iOS and Android platforms.",
        numberOfLessons: 15,
        learningTime: "6 weeks",
        path: "/program/444",
        imgcourse: require("./Images/mobileapp.jpg")
    },
    {
        id: 38,
        rating: 4.6,
        title: "Progressive Web Apps (PWA)",
        description: "Explore the principles and techniques behind building Progressive Web Apps, delivering a seamless and app-like experience on the web.",
        numberOfLessons: 10,
        learningTime: "4 weeks",
        path: "/program/3838",
        imgcourse: require("./Images/pwa.jpg")
    }
];

export const backendcourses = [
    // Existing courses
    {
        id: 5,
        rating: 5.0,
        title: "Node & Express JS",
        description: "Discover the core concepts of Node.js and Express.js in our brief course, exploring essential JavaScript technologies.",
        numberOfLessons: 10,
        learningTime: "4 weeks",
        path: "/program/555",
        imgcourse: require("./Images/R.png")
    },
    // Additional back-end courses
   
    {
        id: 39,
        rating: 4.8,
        title: "Building RESTful APIs with Express",
        description: "Master the art of building RESTful APIs using Express.js, enabling seamless communication between front-end and back-end systems.",
        numberOfLessons: 11,
        learningTime: "4 weeks",
        path: "/program/3939",
        imgcourse: require("./Images/api.jpg")
    },
    {
        id: 40,
        rating: 4.9,
        title: "Java Spring Boot Fundamentals",
        description: "Explore the fundamentals of building web applications with Java Spring Boot, a powerful and widely-used Java framework.",
        numberOfLessons: 10,
        learningTime: "4 weeks",
        path: "/program/4040",
        imgcourse: require("./Images/spring.jpg")
    },
    {
        id: 41,
        rating: 4.7,
        title: "GraphQL for Modern APIs",
        description: "Dive into GraphQL, a query language for APIs, and learn how to build flexible and efficient APIs for modern web applications.",
        numberOfLessons: 12,
        learningTime: "5 weeks",
        path: "/program/4141",
        imgcourse: require("./Images/Grap.jpg")
    }
];


export const testimonials = [
    {
        id: 1,
        name: "Alice Johnson",
        quote: "I thoroughly enjoyed the course for beginners. The content was well-structured and easy to follow.",
        courses:"Learn HTML and CSS for Beginners" ,
        avatar: require("./Images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Bob Smith",
        quote: "This course provided me with a solid foundation for being an UX Designer. Highly recommended!",
        courses :"UX Research and Prototyping",
        avatar: require("./Images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Charlie Brown",
        quote: "I used to struggle with learning the JavaScript language; however, this course has helped me overcome that.",
        courses: 'Javasript from Zero',
        avatar: require("./Images/avatar3.jpg")
    },
    {
        id: 4,
        name: "David Miller",
        quote: "A concise and effective introduction to data analysis with Python, providing clear explanations and practical examples.",
        courses:'Introduction to Data Analysis with Python',
        avatar: require("./Images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Eva Davis",
        quote: "This course on Building RESTful APIs with Express is a game-changer, equipping me with the skills to effortlessly develop robust and scalable APIs.",
        courses: 'Building RESTful APIs with Express',
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
