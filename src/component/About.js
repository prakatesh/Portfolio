import React from 'react'
import image from '../asset/Image/pic-removebg-preview.png'
import '../asset/style/about.css'
import Navbar from './Navbar'
import Footer from './Footer'
function About({value}) {
  return (
    <div>
      <Navbar value={value}/>
      <section className='about'>
        <div className="about-img">
          <img src={image} alt="about" />
        </div>
        <div className="about-content">
          <h2 className="heading">About <span style={{color:"#0ef"}}>Me</span></h2>
          <h3>Developer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem suscipit quisquam facere soluta tenetur laborum adipisci libero, saepe explicabo, quae totam molestias provident quis eius. Consequatur aliquam exercitationem, adipisci architecto eligendi mollitia nemo quisquam a, necessitatibus, quas nulla ad quae commodi perspiciatis pariatur velit? Quaerat, quo?</p>
          <a href="#" className='btn'>Read more</a>
        </div>
      </section>
      <Footer value={value}/>
    </div>
  )
}

export default About
