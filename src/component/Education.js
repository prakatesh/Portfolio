import React from 'react'
import '../asset/style/education.css'
import Navbar from '../component/Navbar'
import Footer from './Footer'
function Education({value}) {
  return (
    <div>
      <Navbar value={value}/>
      <section className='education'>
        <h2 className="heading">Education</h2>
        <div className="education-container">
        <div className='card-education'>
          <div className="year-title">
            <h3>2016-2018</h3>
          </div>
          <div className="eduction-title">
          <h3>SSLC Schoolings</h3>
          </div>
          <div className="detail-education">
          <p>Did my schoolings in Vivekanandha Vidhyalay, Muthur. Ranked Taluk FIRST and School FIRST in SSLC by securing 98.6%. </p>
          </div>
        </div>
        <div className='card-education'>
          <div className="year-title">
            <h3>2016-2018</h3>
          </div>
          <div className="eduction-title">
          <h3>SSLC Schoolings</h3>
          </div>
          <div className="detail-education">
          <p>Did my schoolings in Vivekanandha Vidhyalay, Muthur. Ranked Taluk FIRST and School FIRST in SSLC by securing 98.6%. </p>
          </div>
        </div><div className='card-education'>
          <div className="year-title">
            <h3>2016-2018</h3>
          </div>
          <div className="eduction-title">
          <h3>SSLC Schoolings</h3>
          </div>
          <div className="detail-education">
          <p>Did my schoolings in Vivekanandha Vidhyalay, Muthur. Ranked Taluk FIRST and School FIRST in SSLC by securing 98.6%. </p>
          </div>
        </div>
        <div className='card-education'>
          <div className="year-title">
            <h3>2016-2018</h3>
          </div>
          <div className="eduction-title">
          <h3>SSLC Schoolings</h3>
          </div>
          <div className="detail-education">
          <p>Did my schoolings in Vivekanandha Vidhyalay, Muthur. Ranked Taluk FIRST and School FIRST in SSLC by securing 98.6%. </p>
          </div>
        </div>
        <div className='card-education'>
          <div className="year-title">
            <h3>2016-2018</h3>
          </div>
          <div className="eduction-title">
          <h3>SSLC Schoolings</h3>
          </div>
          <div className="detail-education">
          <p>Did my schoolings in Vivekanandha Vidhyalay, Muthur. Ranked Taluk FIRST and School FIRST in SSLC by securing 98.6%. </p>
          </div>
        </div>
        </div>
      </section>
      <Footer value={value}/>
    </div>
  )
}

export default Education
