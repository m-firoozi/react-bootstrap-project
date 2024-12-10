import React from "react";
import { Container,Row,Col,Card } from "react-bootstrap";
import {LuCamera, LuEye, LuHeart, LuStar } from "react-icons/lu";
import "./interests.css";
import {motion} from "framer-motion";

const Interests=()=>{
    const interests=[
        {icon:<LuCamera style={{color:"blue"}}/>,title:"Phototgraphy"},
        {icon:<LuHeart style={{color:"red"}}/>,title:"Art & Design"},
        {icon:<LuStar style={{color:"yellow"}}/>,title:"UX Research"},
        {icon:<LuEye style={{color:"pink"}}/>,title:"Web Development"},

    ]

    const itemVariants={
        hidden:{opacity:0,x:-50},
        visisble:{opacity:1,x:0},
    }
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
                     
                    <Col key={index} xs={12} sm={6} md={3} className="mb-4">
                        <motion.div initial="hidden"
                        viewport={{once:true,amount:0}}
                        variants={{hidden:{opacity:0,y:50},
                    visible:{opacity:1,y:0}}}
                        transition={{duration:0.5,delay: index * 0.3}}
                        whileInView="visible"
                        >
                        <Card className="interest-card text-center mt-4"  >
                        <Card.Body className="d-flex justify-content-center align-items-center">
                                <div className="interest-icon me-2">{interest.icon}</div>
                                <span className="interest-title mt-2">{interest.title}</span>
                            </Card.Body>
                        </Card>
                        </motion.div>
                        
                    </Col>
                ))}
            </Row>
            
        </Container>
        </div>
    )
}
export default Interests;

