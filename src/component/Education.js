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
        <div className='card-education' data-aos="zoom-in-up" data-aos-offset="200" data-aos-duration="1000" >
          <div className="year-title">
            <h3>2016-2018</h3>
          </div>
          <div className="eduction-title">
          <h3>SSLC Schoolings</h3>
          </div>
          <div className="detail-education">
          <p>Did my schoolings in Jaivins Academy <b>(CBSE)</b>, Attur with securing 76.4%. </p>
          </div>
        </div>
        <div className='card-education' data-aos="zoom-in-up" data-aos-offset="200" data-aos-duration="1000">
          <div className="year-title">
            <h3>2018-2020</h3>
          </div>
          <div className="eduction-title">
          <h3>Higher Secondary</h3>
          </div>
          <div className="detail-education">
          <p>Did my Higher Secondary in Maharishi Vidya Mandir<b>(CBSE)</b>, HOSUR with 79.6% and faced JEEE entrance examinations. </p>
          </div>
        </div><div className='card-education' data-aos="zoom-in-up" data-aos-offset="200" data-aos-duration="1000">
          <div className="year-title">
            <h3>2020-2024</h3>
          </div>
          <div className="eduction-title">
          <h3>Software Engineering</h3>
          </div>
          <div className="detail-education">
          <p>Pursuing my bachelors in Computer Science Engineering from Kongu Engineering College, Perundurai with current CGPA of <b>9.11</b>. </p>
          </div>
        </div>
        <div className='card-education' data-aos="zoom-in-up" data-aos-offset="200" data-aos-duration="1000">
          <div className="year-title">
            <h3>2022-2023</h3>
          </div>
          <div className="eduction-title">
          <h3>Internship</h3>
          </div>
          <div className="detail-education">
          <p>Completed an Internship from IDoT Pvt Ltd... , there completed our college landing page. </p>
          </div>
        </div>
        <div className='card-education' data-aos="zoom-in-up" data-aos-offset="200" data-aos-duration="1000">
          <div className="year-title">
            <h3>2022-2023</h3>
          </div>
          <div className="eduction-title">
          <h3>Consultancy Project</h3>
          </div>
          <div className="detail-education">
          <p>Currently doing a consultancy project for SFS Factory. There developing a full stack <b>(MERN)</b> application.  </p>
          <a href='https://srielumalaiyan.netlify.app/'>Read more</a>
          </div>
        </div>
        </div>
      </section>
      <Footer value={value}/>
    </div>
  )
}

export default Education
