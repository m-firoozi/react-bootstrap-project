import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom';
import "./headerstyle.css";
import { useState } from 'react';
import { useEffect } from 'react';


function Header() {

  const [navbarBg, setNavbarBg]=useState(false);

  const handleScroll=()=> {
    if (window.scrollY > 50){
      setNavbarBg(true);
    }else {
      setNavbarBg(false)
    }
  };
  useEffect(() => {
    window.addEventListener("scroll",handleScroll);
    return ()=>{
      window.removeEventListener("scroll",handleScroll);
    }
  },[]);

    // const [activeLink,setActiveLink]=useState("/")
    // const handleSetActive=(path)=>{
    //     setActiveLink(path);
    // }
  return (
    <Navbar expand="lg" fixed='top' className={navbarBg ? "navbar-scroll" : "navbar-transparent"} variant='dark'>
      <Container>
        <Navbar.Brand href="#home" className='personal-size'>Personal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto px-4">
            <NavLink to="/" end className="nav-link">Home</NavLink>
            <NavLink to="/about"  className="nav-link">About</NavLink>
            <NavLink to="/resume"  className="nav-link">Resume</NavLink>
            <NavLink to="/services" className="nav-link">Services</NavLink>
            <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
           <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Header;