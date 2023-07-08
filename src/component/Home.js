import React, { useState } from 'react'
import '../asset/style/home.css'
import image from '../asset/Image/pic-removebg-preview.png'
import Typed from 'typed.js'
function Home() {
  const el = React.useRef(null)
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`<h3>Hello,It's Me</h3><h1><span>Prakatesh</span> Balakrishnan</h1>`,`<h3>And I'm a <span style={{color:"#0ef"}}>Full Stack-Developer</span></h3>`],
      typeSpeed: 100,
      loop:true
    });
  });

  return (
    <div >
      <section className='home'>
        <div className='home-content'>
            <p ref={el}></p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, atque at. Delectus neque id quos itaque modi!</p>
            <div className='social-media' >
                <a href="#"><box-icon type='logo' name='instagram'></box-icon></a>
                <a  href="#"><box-icon name='linkedin' type='logo' ></box-icon></a>
                <a href="#"><box-icon name='github' type='logo' ></box-icon></a>
            </div>
            <a className='btn'href="#">Download CV</a>
        </div>3
        <div className="home-img">
        <img src={image} alt="image-on -home" />
      </div>
      </section>
    </div>
  )
}

export default Home
