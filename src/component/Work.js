import React from 'react'
import '../asset/style/works.css'
import image1 from '../asset/Image/icon.png'
import image2 from '../asset/Image/generater.png'
import image3 from '../asset/Image/carrier_express.jpg'
import image4 from '../asset/Image/opencv.png'
import image5 from '../asset/Image/keepnotes.png'
import image6 from '../asset/Image/quiz-logo.jpg'
import Navbar from '../component/Navbar'
import Footer from './Footer'
function Work({value}) {
  return (
    <div>
      <Navbar value={value}/>
      <section className='works'>
        <h2 className="heading">Latest <span style={{color:"#0ef"}}>Project</span></h2>
         <div className="works-container">
         <div className="works-box" data-aos="zoom-out-up" data-aos-offset="200" data-aos-duration="1000" >
            <img style={{width:"100%"}} src={image1} alt="" />
            <div className="works-layer">
                <h4>SES Factory</h4>
                <p>Developing website for managing the goods for my native place.</p>
                <a href="https://srielumalaiyan.netlify.app/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
         </div>
         <div className="works-box" data-aos="zoom-out-up" data-aos-offset="200" data-aos-duration="1000">
            <img src={image2} style={{width:"100%"}} alt="" />
            <div className="works-layer">
                <h4>Mech Ranger</h4>
                <p>Developing website for managing the Engine so that Admin and user can exchange the information and Technologies used is ReactJs,NodeJS,MongoDB and Express.</p>
                <a href="https://github.com/prakatesh/machinery-project"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
         </div>
         <div className="works-box" data-aos="zoom-out-up" data-aos-offset="200" data-aos-duration="1000">
            <img src={image3} style={{width:"100%"}} alt="" />
            <div className="works-layer">
                <h4>Carrier Express</h4>
                <p>Developing our idea for transferring the goods that helps both vehicle owner and labors at local area and Technologies used is HTML,CSS,Bootstrap and PHP.</p>
                <a href="https://github.com/prakatesh/Carrier_Express"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
         </div>
         <div className="works-box" data-aos="zoom-out-up" data-aos-offset="200" data-aos-duration="1000">
            <img src={image4} style={{width:"100%"}} alt="" />
            <div className="works-layer">
                <h4>Face Counting</h4>
                <p>We are use image processing to detect and count the number of faces and Technologies used is OpenCV(python)</p>
                <a href="https://github.com/prakatesh/OpenCV"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
         </div>
         <div className="works-box" data-aos="zoom-out-up" data-aos-offset="200" data-aos-duration="1000">
            <img src={image5} style={{width:"100%"}} alt="" />
            <div className="works-layer">
                <h4>Keep Notes</h4>
                <p>Build a Google Keep Clone with ReactJS </p>
                <a href="https://github.com/prakatesh/Keep_Notes"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
         </div>
         <div className="works-box" data-aos="zoom-out-up" data-aos-offset="200" data-aos-duration="1000">
            <img src={image6} style={{width:"100%"}} alt="" />
            <div className="works-layer">
                <h4>QuizApp-React</h4>
                <p>Quiz App using ReactJS</p>
                <a href="https://github.com/prakatesh/Simple_Quiz_App_Using_React"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
         </div>
         </div>
      </section>
      <Footer value={value}/>
    </div>
  )
}

export default Work
