import React from "react";
import PageHeader from "../pageHeader/PageHeader";
import { Container,Row,Col } from "react-bootstrap";
import "./resume.css";
import {motion} from "framer-motion";



const Resume=()=>{
    return(
        <motion.div initial={{opacity:0, y:70}}
        animate={{opacity:1 ,y:0}}
        exit={{opacity:0,y:70}}
        transition={{duration:0.8}}>
        <PageHeader title="Resume"/>
        
        <motion.div initial={{opacity:0, y:70}}
        animate={{opacity:1 ,y:0}}
        exit={{opacity:0,y:70}}
        transition={{duration:0.8}}>
        
        <Container className="my-5 position">
            <Row>
                <Col md={6}>
                <h3 className="text-uppercase fw-bold">Summary</h3>
                <div className="resume-section">
                    <h5>Faeze Firoozi</h5>
                    <p>Innovative and self-motivated IT graduate with a passion for web design and front-end development.
                        Recently completed a web design certification from Tehran Technical Complex, building skills in HTML , CSS ,and JavaScript.
                        Experienced English language instructor with several years of teaching children and teens at Dialogue Language Institute.
                    </p>
                    <ul>
                        <li>Mashhad, Iran</li>
                        <li>February 20, 1996</li>
                    </ul>
                </div>
                <h3 className="text-uppercase fw-bold mt-4">Education</h3>
                <div className="resume-section">
                    <h5>Bachelor of Science in Information Technology (IT)</h5>
                    <p>Islamic Azad University, Mashhad</p>
                    <p>Completed in [2021]</p>
                </div>

                <div className="resume-section">
                    <h5>Web Design Certification</h5>
                    <p>Tehran Technical Complex</p>
                    <p>Completed in [November 2024]</p>
                </div>
                </Col>
                
                <Col md={6}>
                <h3 className="text-uppercase fw-bold">Professional Experience</h3>
                <div className="resume-section">
                    <h5>English Language Instructor</h5>
                    <p>Dialogue Language Institute, Mashhad</p>
                    <p>2015 - 3 months ago</p>
                    <ul>
                        <li>Taught English to children and teens , focusing on communication and language fundamentals in an engaging and 
                            interactive environment.
                        </li>
                    </ul>
                </div>
                </Col>
                
            </Row>
        </Container>
        </motion.div>
       </motion.div>
    )
}
export default Resume;