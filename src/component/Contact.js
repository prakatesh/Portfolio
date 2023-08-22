import React from 'react'
import '../asset/style/contact.css'
import Navbar from '../component/Navbar'
import Footer from './Footer'
function Contact({value}) {
  return (
    <div>
      <Navbar value={value}/>
      <section className='contact'>
        <h2 className='heading'><span style={{color:"#0ef"}}>Contact Me!</span></h2>
        <form action="">
          <div className="input-box">
            <input type="text" placeholder='Full Nmae' />
            <input type="text" placeholder='Email Address' />
          </div>
          <div className="input-box">
            <input type="number" placeholder='Mobile Number' />
            <input type="text" placeholder='Email subject' />
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder='Your message'></textarea>
          <input type="submit" value="Send Message" className='btn' />
        </form>
      </section>
      <Footer value={value}/>
    </div>
  )
}

export default Contact
