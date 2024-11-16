import React from "react";
import PageHeader from "../pageHeader/PageHeader";
import { Container,Row,Col,Form,Button } from "react-bootstrap";
import { LuMapPin,LuMail,LuPhone,LuShare2 } from "react-icons/lu";
import "./contact.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";


const Contact=()=>{
    return(
        <>
        <PageHeader title="Contact"/>
        <Container className="contact-section my-5">
            <Row className="mb-4 info-position">
                <Col xs={12}  md={6} className="resize">
                <div className="contact-info d-flex align-items-center mb-4">
                    <div className="icon-circle">
                  <LuMapPin/>
                  </div>
                  <div>
                    <h5>Address</h5>
                    <p>No.389 ,DaneshAmouz 23, DaneshAmouz Blvd ,Mashhad,Iran</p>   
                 </div>  
                </div>
                </Col>
              
                <Col xs={12} md={6} >
                    <div className="contact-info d-flex align-items-center mb-4">
                        <div className="icon-circle">
                        <LuPhone/>
                        </div>
                        <div>
                            <h5>Call Me</h5>
                            <p>09158822378</p>
                        </div>
                    </div>
                    </Col>

                    <Col xs={12}  md={6}>
                <div className="contact-info d-flex align-items-center mb-4">
                    <div className="icon-circle">
                    <LuMail/>
                    </div>
                    <div>
                    <h5>Email Us</h5>
                    <p>faeze.firouzi@yahoo.com</p>
                    </div>
                </div>
                
                </Col>

                   <Col xs={12} md={6} >
                    <div className="contact-info d-flex align-items-center mb-4">
                        <div className="icon-circle">
                        <LuShare2 />
                        </div>
                        <div>
                            <h5>Social Profiles</h5>
                            <div className="social-icons">
                                <a href="https://www.facebook.com" target="_blank" className="social-icon"><FaFacebook/></a>
                                <a href="https://www.instagram.com" target="_blank" className="social-icon"><FaInstagram/></a>
                                <a href="https://www.linkedin.com" target="_blank" className="social-icon"><FaLinkedin/></a>
                                <a href="https://github.com/m-firoozi/" target="_blank" className="social-icon"><FaGithub/></a>

                            </div>
                        </div>
                    </div>
                </Col>
            </Row>


            <Row>
                <Col>
                    <Form className="contact-form">
                        <Row>
                            <Col md={6} sm={12}>
                                <Form.Group controlId="name" className="mb-3">
                                    <Form.Control type="text" placeholder="Your Name"/>
                                </Form.Group>
                            </Col>

                            <Col md={6} sm={12}>
                                <Form.Group controlId="email" className="mb-3">
                                    <Form.Control type="email" placeholder="Your Email"/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group controlId="subject" className="mb-3">
                            <Form.Control type="text" placeholder="Subject"/>
                        </Form.Group>
                        <Form.Group controlId="message" className="mb-3">
                            <Form.Control as="textarea" rows={6} placeholder="Message"/>
                         
                        </Form.Group>
                        <div className="send-btn">
                        <Button>Send Message</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>       
    )
}
export default Contact;