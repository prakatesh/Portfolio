import React from 'react'
import '../asset/style/footer.css'
import { NavLink } from 'react-router-dom'
function Footer({value}) {
  return (
    <div>
      {value==='0'?
      <footer style={{background:"#323946"}} className='footer'>
      <div className="footer-text">
          <p>Copyright &copy;2023 by Prax | All Rights Reserved.</p>
      </div>
      <div className='navbar'>
          <NavLink style={{textDecoration:"none",color:"white"}} to='/'>Home</NavLink>
          <NavLink style={{textDecoration:"none",color:"white"}} to='/about'>About</NavLink>
          <NavLink style={{textDecoration:"none",color:"white"}} to='/services'>Service</NavLink>
          <NavLink style={{textDecoration:"none",color:"white"}} to='/education'>Education</NavLink>
          <NavLink style={{textDecoration:"none",color:"white"}} to='/works'>Works</NavLink>
          <NavLink style={{textDecoration:"none",color:"white"}} to='/contact'>Contact</NavLink>
      </div>
    </footer>
    :
    <footer style={{background:"#1f242d"}}className='footer'>
        <div className="footer-text">
            <p>Copyright &copy;2023 by Prax | All Rights Reserved.</p>
        </div>
        <div className='navbar'>
            <NavLink style={{textDecoration:"none",color:"white"}} to='/'>Home</NavLink>
            <NavLink style={{textDecoration:"none",color:"white"}} to='/about'>About</NavLink>
            <NavLink style={{textDecoration:"none",color:"white"}} to='/services'>Service</NavLink>
            <NavLink style={{textDecoration:"none",color:"white"}} to='/education'>Education</NavLink>
            <NavLink style={{textDecoration:"none",color:"white"}} to='/works'>Works</NavLink>
            <NavLink style={{textDecoration:"none",color:"white"}} to='/contact'>Contact</NavLink>
        </div>
      </footer>
    }
    </div>
  )
}

export default Footer
