import React from 'react'
import '../asset/style/home.css'
import image from '../asset/Image/pic-removebg-preview.png'
function Home() {
  return (
    <div >
      <section className='home'>
        <div className='home-content'>
            <h3>Hello,It's Me</h3>
            <h1>Prakatesh Balakrishnan</h1>
            <h3>And I'm a <span style={{color:"#0ef"}}>Full Stack-Developer</span></h3>
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
