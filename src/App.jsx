// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import About from "./Components/About us/About";
import Course from "./Components/Course/Course";
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login'; 
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route index element={<Home />} />
        <Route path='Aboutus' element={<About />} />
        <Route path='Courses' element={<Course />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
