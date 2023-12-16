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
import Forgotpassword from './Components/Login/Forgotpassword';
import Signup from './Components/Login/Signup';
import Resetpassword from './Components/Login/Resetpassword';
import Single from './Components/Course/Single';
import Watchpage from './Components/Course/CourseSingle/Watchpage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


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
        <Route path='Signup' element={<Signup />} />
        <Route path='forgot-password' element={<Forgotpassword/>} />
        <Route path='reset-password' element={<Resetpassword />} />
        <Route path='courses/UI-UX' element={<UIUX />} />
        <Route path='courses/:id' element={<Single />} />
        <Route path='lesson/:id' element={<Watchpage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
};

export default App;
