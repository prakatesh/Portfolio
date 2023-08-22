import React from 'react'
import '../asset/style/contact.css'
import Navbar from '../component/Navbar'
import Footer from './Footer'
function Contact({value}) {
  return (
    <div>
      <Navbar value={value}/>
      <section className='contact'>
        <h2 className='heading'><span style={{color:"#0ef",fontWeight:"bolder"}}>Contact Me!</span></h2>
        <form action="https://formsubmit.co/885a554a647ca98186e4860ebd8704bd" method="POST" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
          <div className="input-box">
            <input type="text" placeholder='Full Nmae' name="name" />
            <input type="text" placeholder='Email Address' name="email" />
          </div>
          <div className="input-box">
            <input type="number" placeholder='Mobile Number' name="mobile" />
            <input type="text" placeholder='Email subject' />
          </div>
          <textarea cols="30" rows="10" placeholder='Your message' name="comment"></textarea>
          <input type="submit" value="Send Message" className='btn' style={{color:"black"}}/>
        </form>
      </section>
      <Footer value={value}/>
    </div>
  )
}

export default Contact
