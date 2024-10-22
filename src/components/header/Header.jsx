import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link } from 'react-router-dom';
import "./headerstyle.css";
import { useState } from 'react';


function Header() {
    const [activeLink,setActiveLink]=useState("/")
    const handleSetActive=(path)=>{
        setActiveLink(path);
    }
  return (
    <Navbar expand="lg" className="bg-black navbar-dark navbar">
      <Container>
        <Navbar.Brand href="#home" className='personal-size'>Personal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto px-4">
            <Link to="/" className={activeLink === "/" ? "active nav-link" : "nav-link"} onClick={()=>handleSetActive("/")}>Home</Link>
            <Link to="/about" className={activeLink === "/about" ? "active nav-link" : " nav-link"} onClick={()=>handleSetActive("/about")}>About</Link>
            <Link to="/resume" className={activeLink === "/resume" ? "active nav-link" : "nav-link "} onClick={()=>handleSetActive("/resume")}>Resume</Link>
            <Link to="/services" className={activeLink === "/services" ? "active nav-link" : "nav-link"} onClick={()=>handleSetActive("/services")}>Services</Link>
            <Link to="/portfolio" className={activeLink === "/portfolio" ? "active nav-link" : "nav-link"} onClick={()=>handleSetActive("/portfolio")}>Portfolio</Link>
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
           <Link to="/contact" className={activeLink === "/contact" ? "active nav-link" : "nav-link"} onClick={()=>handleSetActive("/contact")}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Header;