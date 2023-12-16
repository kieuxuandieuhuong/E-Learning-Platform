// Trong component Video.js
import React from 'react';
import { courses } from '../../../data'; 

function Video({ video }) {
  const { popularcourse } = courses;

  return (
    <section>
      <div className='container courseinfo_container'>
        {popularcourse.map(({ id, title, description, path }) => (
          <div className="courses_course" key={id}>
            {path && (
              <div>
                <iframe
                  className='video'
                  title={title}
                  width="560"
                  height="315"
                  src={path}
                  allowFullScreen
                ></iframe>
                <a href={path}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Video;
