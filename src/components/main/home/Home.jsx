import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Container,Row,Col,Button } from "react-bootstrap";
import "./home.css";

const Home=()=>{
    return(
       <Container fluid className="home-container d-flex align-items-center">
        <Row className="justify-content-start w-100"> 
            <Col md={6} className="text-section">
            <h1>Mehrnoosh Firoozi</h1>
            <h2>
                <span className="typewriter-text">I'm{" "}<span className="highlight-text">
            <Typewriter words={["a freelancer", "a developer" , "a web designer"]} loop={0} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={1000}/>
            </span>
            </span>
            </h2>
            <div className="social-links mt-4">
                <Button variant="outline-light" href="https://www.facebook.com" target="_blank" className="ms-2 social-btn"><i className="fab fa-facebook-f"></i></Button>
                <Button variant="outline-light" href="https://www.instagram.com" target="_blank" className="ms-2 social-btn"><i className="fab fa-instagram"></i></Button>
                <Button variant="outline-light" href="https://www.linkedin.com" target="_blank" className="ms-2 social-btn"><i className="fab fa-linkedin"></i></Button>

            </div>
            </Col>
        </Row>
        <div className="spacer"></div>
       </Container>
    )
}
export default Home;