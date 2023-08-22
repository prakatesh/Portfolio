import React from 'react'
import '../asset/style/home.css'
import resume from '../asset/Image/Prakatesh_Resume.jpg'
import image from '../asset/Image/pic-removebg-preview.png'
import Typed from 'typed.js'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import 'aos/dist/aos.css';
function Home({value}) {
  const el = React.useRef(null)
  React.useEffect(() => {
    new Typed(el.current, {
      strings:[`<h3>Hello,It's Me</h3><h1><span>Prakatesh</span></h1>`,`<h3>And I'm a <br><h1><span style={{color:"#0ef"}}>Full Stack-Developer</span></h1></h3>`],
      typeSpeed: 20,
      loop:true
    });
  });
  return (
    <div >
      <Navbar value={value}/>
      <section className='home'>
        <div data-aos="fade-right"data-aos-offset="200" data-aos-duration="1000" className='home-content col-md-6'>
            <p className='span' ref={el}></p>
            <div className='social-media'>
                <a href="https://www.instagram.com/prakatesh_bm/"><box-icon type='logo' name='instagram'></box-icon></a>
                <a  href="https://www.linkedin.com/in/prakatesh/"><box-icon name='linkedin' type='logo' ></box-icon></a>
                <a href="https://github.com/prakatesh"><box-icon name='github' type='logo' ></box-icon></a>
            </div>
            <a className='btn'href={resume} download>Download CV</a>
        </div>
        <div data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000" className="home-img col-md-6">
        <img src={image} alt="al"/>
      </div>
      </section>
      <Footer value={value}/>
    </div>
  )
}

export default Home
