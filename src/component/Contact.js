import React from 'react'
import '../asset/style/contact.css'
function Contact() {
  return (
    <div>
      <section className='contact'>
        <h2 className='heading'>Contact<span style={{color:"#0ef"}}>Me!</span></h2>
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
    </div>
  )
}

export default Contact
