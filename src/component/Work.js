import React from 'react'
import '../asset/style/works.css'
import image from '../asset/Image/sago.png'
import Navbar from '../component/Navbar'
import Footer from './Footer'
function Work({value}) {
  return (
    <div>
      <Navbar value={value}/>
      <section className='works'>
        <h2 className="heading">Latest <span style={{color:"#0ef"}}>Project</span></h2>
         <div className="works-container">
         <div className="works-box">
            <img src={image} alt="" />
            <div className="works-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque aperiam voluptatum. Iure, aliquam qui.</p>
                <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
         </div>
         <div className="works-box">
            <img src={image} alt="" />
            <div className="works-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque aperiam voluptatum. Iure, aliquam qui.</p>
                <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
         </div>
         <div className="works-box">
            <img src={image} alt="" />
            <div className="works-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque aperiam voluptatum. Iure, aliquam qui.</p>
                <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
         </div>
         <div className="works-box">
            <img src={image} alt="" />
            <div className="works-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque aperiam voluptatum. Iure, aliquam qui.</p>
                <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
         </div>
         <div className="works-box">
            <img src={image} alt="" />
            <div className="works-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque aperiam voluptatum. Iure, aliquam qui.</p>
                <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
         </div>
         <div className="works-box">
            <img src={image} alt="" />
            <div className="works-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque aperiam voluptatum. Iure, aliquam qui.</p>
                <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
         </div>
         </div>
      </section>
      <Footer value={value}/>
    </div>
  )
}

export default Work
