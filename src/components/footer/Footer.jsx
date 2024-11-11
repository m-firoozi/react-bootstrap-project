import React from "react";
import {Container,Row,Col,Button } from "react-bootstrap";
import "./footer.css";


const Footer=()=>{
    return(
        <footer className="footer text-light text-center">
            <Container fluid>
                <Row>
                    <Col>
                    <h5 >Personal</h5>
                    <div className="social-icons">
                        <Button variant="outline-light" href="https://github.com/m-firoozi/" target="_blank" className="me-2"><i className="fab fa-github"></i></Button>
                        <Button variant="outline-light" href="https://www.instagram.com" target="_blank" className="me-2"><i className="fab fa-instagram"></i></Button>
                        <Button variant="outline-light" href="https://www.linkedin.com" target="_blank" className="me-2"><i className="fab fa-linkedin"></i></Button>
                    </div>
                    </Col>
                </Row>
                <hr className="size"/>
                <Row>
                    <Col>
                    <p className="mt-3">copyright <strong>Personal</strong>  All Rights Reserved.
                        <br/>
                        Designed by <span className="bootstrap-color">BootstrapMade</span></p>
                    </Col>
                </Row>
                {/* <Button className="back-to-top" onClick={()=>window.scrollTo({ top:0 ,behavior:"smooth"})} ><i className="fas fa-arrow-up"></i></Button> */}
            </Container>
        </footer>
    )
}
export default Footer;
