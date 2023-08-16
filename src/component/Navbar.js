import React from 'react';
import {Collapse, Navbar,  NavbarToggler,  NavbarBrand,  Nav,  NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import '../asset/style/navbar.css'
import images from '../asset/Image/iconl.jpg'
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        {this.props.value==='0'?
        <Navbar style={{backgroundColor:"#323946"}}  light expand="md">
        <NavLink to="/"><img style={{width:"9rem",height:"8vh",cursor:"pointer"}} src={images} alt="icon"/></NavLink>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen}  navbar>
          <Nav className="ml-auto" navbar style={{marginLeft:"20vh"}}>
            <NavItem >
              <NavLink  to="/" style={{paddingLeft:"8vh",color:"white",textDecoration:"none"}}><span style={{color:"white",paddingRight:"1vh"}}><i className="fa-solid fa-home" /></span>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" style={{paddingLeft:"8vh",color:"white",textDecoration:"none"}}><span style={{color:"white",paddingRight:"1vh"}}><i className="fa-solid fa-user" /></span>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/services" style={{paddingLeft:"8vh",color:"white",textDecoration:"none"}}><span style={{color:"white",paddingRight:"1vh"}}><i className="fa-solid fa-book" /></span>Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/education" style={{paddingLeft:"8vh",color:"white",textDecoration:"none"}}><span style={{color:"white",paddingRight:"1vh"}}><i class="fa-solid fa-user-graduate"></i></span>Education</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/works" style={{paddingLeft:"8vh",color:"white",textDecoration:"none"}}><span style={{color:"white",paddingRight:"1vh"}}><i class="fa-solid fa-laptop-file"></i></span>Works</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" style={{paddingLeft:"8vh",color:"white",textDecoration:"none"}}><span style={{color:"white",paddingRight:"1vh"}}><i className="fa-solid fa-phone-volume"/></span>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      :
      <Navbar style={{backgroundColor:"#1f242d"}}  light expand="md">
        <NavbarBrand to="/"><img style={{width:"9rem",height:"8vh",cursor:"pointer"}} src={images} alt="icon"/></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen}  navbar>
          <Nav className="ml-auto" navbar style={{marginLeft:"20vh"}}>
            <NavItem >
              <NavLink  to="/" style={{paddingLeft:"8vh",color:"white",textDecoration:"none"}}><span style={{color:"white",paddingRight:"1vh"}}><i className="fa-solid fa-home" /></span>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" style={{paddingLeft:"8vh",color:"white",textDecoration:"none"}}><span style={{color:"white",paddingRight:"1vh"}}><i className="fa-solid fa-user" /></span>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/services" style={{paddingLeft:"8vh",color:"white",textDecoration:"none"}}><span style={{color:"white",paddingRight:"1vh"}}><i className="fa-solid fa-book" /></span>Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/education" style={{paddingLeft:"8vh",color:"white",textDecoration:"none"}}><span style={{color:"white",paddingRight:"1vh"}}><i class="fa-solid fa-user-graduate"></i></span>Education</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/works" style={{paddingLeft:"8vh",color:"white",textDecoration:"none"}}><span style={{color:"white",paddingRight:"1vh"}}><i class="fa-solid fa-laptop-file"></i></span>Works</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" style={{paddingLeft:"8vh",color:"white",textDecoration:"none"}}><span style={{color:"white",paddingRight:"1vh"}}><i className="fa-solid fa-phone-volume"/></span>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>}
        
      </div>
    );
  }
}