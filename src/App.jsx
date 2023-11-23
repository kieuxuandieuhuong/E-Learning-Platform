import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from "./Components/Home/Home";
import Testimonials from "./Components/Testimonials/Testimonials";
import Infor from "./Components/Infor/Infor";
import Intro from "./Components/Intro/Intro";
import Footer from "./Components/Footer/Footer";
import Course from "./Components/Course/Course";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
      <Home />
      <Intro />
      <Infor />
      <Course/>
      <Testimonials/>
      <Footer/>
    </BrowserRouter>
  )
};
 export default App;
