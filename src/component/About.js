import React from 'react'
import '../asset/style/about.css'
import Navbar from './Navbar'
import Footer from './Footer'
function About({value}) {
  return (
    <div>
      <Navbar value={value}/>
      <section className='about'>
        <div className="about-img">
          <img src="https://camo.githubusercontent.com/9afefcbff89a66b497e623146404d0e0d51fd46d9cd4039f8580a339a2ad9cbc/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f323830302f312a4255376630324c655165454c7a747178613865436d772e676966" alt="about" />
        </div>
        <div className="about-content">
          <h2 className="heading">About <span style={{color:"#0ef"}}>Me</span></h2>
          <h3>Name : Prakatesh B </h3>
          <h3>Age : 20</h3>
          <p>A very passionate B.E Computer Science graduate who is seeking for an opportunity to grow and I have worked in bunch of projects. I am more intrested in developing attractive designs and functional websites. My strength in DSA and work experience in React JS highlights me more.</p>
          <a href="https://github.com/prakatesh" className='btn'>Read more</a>
        </div>
      </section>
      <Footer value={value}/>
    </div>
  )
}

export default About
