import React from 'react'
import '../asset/style/services.css'
import Navbar from '../component/Navbar'
import Footer from './Footer'
function Services({value}) {
  return (
    <div >
        <Navbar value={value}/>
        <section className='services'>
        <h2 style={{textAlign:"center",fontSize:"4.5rem" }}>Our <span style={{color:"#0ef"}}>Services</span></h2>
      <div className="row">
        <div className="col-md-4" data-aos="flip-left" data-aos-offset="200" data-aos-duration="1000">
                <div className="card">
                    <div className="icon-services">
                    <i  class="fa-solid fa-pager"></i>
                    </div>
                    <div className='heading-services'>
                        <h3>FULL STACK</h3>
                    </div>
                    <div className="services-content">
                       <p>Web developing with amazing UI and with advanced frameworks</p>
                    </div>
                </div>
        </div>
        <div className="col-md-4" data-aos="flip-up" data-aos-offset="200" data-aos-duration="1000">
           
                <div className="card">
                    <div className="icon-services">
                    <i  class="fa fa-paintbrush"></i>
                    </div>
                    <div className='heading-services'>
                        <h3>Design</h3>
                    </div>
                    <div className="services-content">
                    <p>UI and prototype designer and having knowledge on canva and figma</p>
                    </div>
                </div>
        </div>
        <div className="col-md-4" data-aos="flip-right" data-aos-offset="200" data-aos-duration="1000">
            <div className='card'>
             
                    <div className="icon-services">
                    <i   class="icon fas fa-credit-card"></i>
                    </div>
                    <div className='heading-services'>
                        <h3>IOT</h3>
                    </div>
                    <div className="services-content">
                    <p>Developing the Smart Applications using Internet of Things</p>
                    </div>
                </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4" data-aos="flip-left" data-aos-offset="200" data-aos-duration="1000">
          
                <div className="card">
                    <div className="icon-services">
                    <i  class="fa-solid fa-keyboard"></i>
                    </div>
                    <div className='heading-services'>
                    <h3>Programmer</h3>
                    </div>
                    <div className="services-content">
                    <p>A programmer with excellent solving skills and knowledge in OOPS</p>
                    </div>
                </div>
           
        </div>
        <div className="col-md-4" data-aos="flip-up" data-aos-offset="200" data-aos-duration="1000">
            <div className='services'>
                <div className="card">
                    <div className="icon-services">
                    <i  class="fa-brands fa-android"></i>
                    </div>
                    <div className='heading-services'>
                    <h3>Developer</h3>
                    </div>
                    <div className="services-content">
                    <p>Developing products in both software and hardware products</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4" data-aos="flip-right" data-aos-offset="200" data-aos-duration="1000">
           
                <div className="card">
                    <div className="icon-services">
                    <i  class="fa-solid fa-database"></i>
                    </div>
                    <div className='heading-services'>
                        <h3>DataBase</h3>
                    </div>
                    <div className="services-content">
                    <p>Managing the database with the tools like SQL and MongoDB</p>
                    </div>
                </div>
            
        </div>
      </div>
      </section>
      <Footer value={value}/>
    </div>
  )
}

export default Services
