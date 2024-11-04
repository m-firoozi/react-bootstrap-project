import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import "./personalInfo.css";

const PersonalInfo=() =>{
    return(
        <Container>
            <Row className="my-5">
                
                <h2 className="text-success text-center mb-5">Web Designer & Web Developer</h2>
                <Col md={5} className="text-position">
                <ul className="list-unstyled">
                    <li className="info-item"><span className="text-success">Birthday:</span> 20 February 1996</li>
                    <li className="info-item"><span className="text-success">Website:</span> www.example.com</li>
                    <li className="info-item"><span className="text-success">Phone:</span> +98 9158822378</li>
                    <li className="info-item"><span className="text-success">City:</span> Mashhad,Iran</li>

                </ul>
                </Col>
                <Col md={5} className="mt-1">
                <ul className="list-unstyled">
                    <li className="info-item"><span className="text-success">Age:</span> 28</li>
                    <li className="info-item"><span className="text-success">Degree:</span> BA</li>
                    <li className="info-item"><span className="text-success">Email:</span> faeze.firouzi@yahoo.com</li>
                    <li className="info-item"><span className="text-success">Freelance:</span> Available</li>


                </ul>
                </Col>
            </Row>
        </Container>
    )
}
export default PersonalInfo;