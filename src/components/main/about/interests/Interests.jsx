import React from "react";
import { Container,Row,Col,Card } from "react-bootstrap";
import {LuCamera, LuEye, LuHeart, LuStar } from "react-icons/lu";
import "./interests.css";

const Interests=()=>{
    const interests=[
        {icon:<LuCamera style={{color:"blue"}}/>,title:"Phototgraphy"},
        {icon:<LuHeart style={{color:"red"}}/>,title:"Art & Design"},
        {icon:<LuStar style={{color:"yellow"}}/>,title:"UX Research"},
        {icon:<LuEye style={{color:"pink"}}/>,title:"Web Development"},

    ]

    return(
        <div className="resize"> 
        <Container className="my-5 position">
          
            <div className="title-position">
            <h6 className="text-uppercase fw-bold text-muted features-style">Features</h6>
            </div>

            <div>
            <h2 className="text-uppercase fw-bold mb-4 ">I'm Interested In</h2>
            </div>
            
            <Row>
                {interests.map((interest,index)=>(
                     
                    <Col key={index} md={3} sm={6} xs={12} className="mb-4">
                        <Card className="interest-card text-center mt-4">
                        <Card.Body className="d-flex justify-content-center align-items-center">
                                <div className="interest-icon me-2">{interest.icon}</div>
                                <span className="interest-title mt-2">{interest.title}</span>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            
        </Container>
        </div>
    )
}
export default Interests;

