// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import About from "./Components/About us/About";
import Course from "./Components/Course/Course";
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import "./App.css";
import UIUX from './Components/Course/Category/UIUX';
import Single from './Components/Course/Single';
import Watchpage from './Components/Course/CourseSingle/Watchpage';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='Aboutus' element={<About />} />
        <Route path='courses' element={<Course />} />
        <Route path='contact' element={<Contact />} />
        <Route path='Login' element={<Login />} />
        <Route path='courses/UI-UX' element={<UIUX />} />
        <Route path='courses/:id' element={<Single />} />
        <Route path='watch/:id' element={<Watchpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
