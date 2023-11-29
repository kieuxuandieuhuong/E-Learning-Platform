import { BrowserRouter, Routes, Route} from 'react-router-dom';


import Home from "./Components/Home/Home";
import Testimonials from "./Components/Testimonials/Testimonials";
import About from "./Components/About us/About";
import Footer from "./Components/Footer/Footer";
import Course from "./Components/Course/Course";
import Navbar from './Components/Navbar/Navbar';
import Contact from './Contact/Contact';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element ={<Home />}/>
        <Route path='Aboutus' element={<About/>}/>
        <Route path='Courses' element={<Course/>}/>
        <Route path='Contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
};
 export default App;
