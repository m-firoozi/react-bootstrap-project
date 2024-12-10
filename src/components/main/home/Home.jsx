import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Container,Row,Col,Button } from "react-bootstrap";
import "./home.css";
import {motion} from "framer-motion";

const Home=()=>{
    return(
        <motion.div initial={{opacity:0,scale:0.4}}
        animate={{opacity:1,scale:1}}
        // exit={{opacity:0,scaleX:4}}
        transition={{duration:2}}>
       <Container fluid className="home-container d-flex align-items-center">
        <Row className="justify-content-start w-100"> 
            <Col md={6} className="text-section">
            <h1>Faeze Firoozi</h1>
            <h2>
                <span className="typewriter-text">I'm{" "}<span className="highlight-text">
            <Typewriter words={["a web designer" , "a freelancer", "a developer"]} loop={0}  cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={1000}/>
            </span>
            </span>
            </h2>
            <div className="social-links mt-4">
                <Button variant="outline-light" href="https://github.com/m-firoozi/" target="_blank" className="ms-2 social-btn"><i className="fab fa-github"></i></Button>
                <Button variant="outline-light" href="https://www.instagram.com" target="_blank" className="ms-2 social-btn"><i className="fab fa-instagram"></i></Button>
                <Button variant="outline-light" href="https://www.linkedin.com" target="_blank" className="ms-2 social-btn"><i className="fab fa-linkedin"></i></Button>

            </div>
            </Col>
        </Row>
        <div className="spacer"></div>
       </Container>
       </motion.div>
    )
}
export default Home;