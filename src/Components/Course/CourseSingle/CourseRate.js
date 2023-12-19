import React, { useState } from 'react'
import ReactStars from 'react-stars'

function CourseRate() {
    const [learncourse, setlearncourse] =useState (true);
      return (
    <div  className='reviews_container'>
        <h2 id='review' >Review Course</h2>
        <div className='reviews'>
        <div className='containerreviews'>
      <div className='reivewcontent'>
        <h4> Customer Reviews</h4>
        <div className='ratingstars'>
        <ReactStars
        count={5}
        value={4}
        edit ={false}
        size={24}
        color2={'#ffd700'} />
  <span> Bases on 2 Reviews</span>
  </div> 
  </div>
      <div className='reviewlink'>
      {
            learncourse &&(
                <div>
                <a className='createreview' href='/Login' >Write a Review</a>   
                </div>
            )
        }
      </div>
        </div>
        <div className='review-form'>
        <h4> Write a Review</h4>
            <form action='' className='formcontainer'>
                <div>
                <ReactStars
                count={5}
                value={4}
                edit ={false}
                size={24}
                color2={'#ffd700'} />
                </div>
                <div> <textarea 
                    name=''
                    id=''
                    className='formcontrol'
                    rows="5"
                    placeholder='Comments'></textarea>
                </div>
                <button className='btn'>Submit</button>
                </form> 
                </div>
        <div className='learnerrating'>
        <div className='learnerreview'>
        
        <h3>Navdeep</h3>
        <ReactStars
        count={5}
        value={4}
        edit ={false}
        size={24}
        color2={'#ffd700'} />
        </div>
        <small className='contentreview'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </small>
        </div>
        </div>
        

    </div>
  )
}

export default CourseRate