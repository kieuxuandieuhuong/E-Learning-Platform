import React from 'react'
import "./User.css"
import avatar from "../../Images/account.png"
import { Link } from 'react-router-dom'
 const User = () => {
   return (
     <section>
        <div className='container usercontainer'>
            <div className='backgroundprofile' ></div>
            <div className='headerprofile'>
            <div className="avatarprofie">
            <img src={avatar} alt ='infor Image' /> 
             </div>
             <div className='nameuser'><h2>Dieu Huong </h2>  </div>
            </div>
            
            <div className='proilecontent'>
            <div className='profileuser'>
                <h2>Profile</h2>
                <div className='userinfor'>
              <p>Being student from 7 day ago</p>  
                <p>Email:</p>
            </div>
            </div>
            <div className='usercourse'>
                <h2>Your Course</h2>
            <div className="usercourseinfo" >
                <Link to ={`/courses`} >
                <img src='https://imgur.com/8UlQFif.jpg' alt='imgcourse' className="courseimg" /></Link>
                <div className="text-column">
  <h4>UI Design Fundamentals</h4>
  <p>Master the principles of User Interface (UI) design and create visually appealing and user-friendly digital experiences.</p>
</div>
            </div>
                 </div>
            </div>
            </div>
            
     </section>
   )
 }
 
 export default User