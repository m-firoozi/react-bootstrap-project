import {Container, Navbar,Nav,Offcanvas} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import "./headerstyle.css";
import { useState } from 'react';
import { useEffect } from 'react';


function Header() {

  const [navbarBg, setNavbarBg]=useState(false);
  const[showMenu,setShowMenu]=useState(false)

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


  const toggleMenu=()=>setShowMenu(!showMenu)
  const closeMenu=()=>setShowMenu(false);
    // const [activeLink,setActiveLink]=useState("/")
    // const handleSetActive=(path)=>{
    //     setActiveLink(path);
    // }
  return (
    <Navbar expand="lg" fixed='top' className={navbarBg ? "navbar-scroll" : "navbar-transparent"}  variant='dark'>
      <Container>
        <Navbar.Brand href="#home" className='personal-size'>Personal</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="offcanvasNavbar" /> */}
        <button className='menu-toggle' onClick={showMenu ? closeMenu : toggleMenu}>{showMenu ? "🗙" : "☰"}</button>
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"  show={showMenu} onHide={closeMenu} className="offcanvas-position" style={{backgroundColor:"#1c1c1c"}}>
        {/* <button className='close-button' type='button' onClick={()=>document.getElementById("offcanvasNavbar").classList.remove("show")}>X</button> */}
        
          <Offcanvas.Body>
          <Nav className="ms-auto px-4">
            <NavLink to="/" end className="nav-link" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about"  className="nav-link"  onClick={closeMenu}>About</NavLink>
            <NavLink to="/resume"  className="nav-link"  onClick={closeMenu}>Resume</NavLink>
            <NavLink to="/services" className="nav-link"  onClick={closeMenu}>Services</NavLink>
            <NavLink to="/portfolio" className="nav-link"  onClick={closeMenu}>Portfolio</NavLink>
           <NavLink to="/contact" className="nav-link"  onClick={closeMenu}>Contact</NavLink>
          </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    
  );
}

export default Header;