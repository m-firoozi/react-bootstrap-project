import React from "react";
import PageHeader from "../pageHeader/PageHeader";
import { useState } from "react";
import { Container,Row,Col,Card,Modal } from "react-bootstrap";
import { FaSearch, FaSearchPlus } from "react-icons/fa";
import "./portfolio.css";
import { BiLink } from "react-icons/bi";
import {motion} from "framer-motion";

const Portfolio=()=>{

    const projects=[
        {
            id:1,
            title:"jewelry-page1",
            imgSrc:"./images/jewelryproject-firstpage.png",
            category:"web design",
            date:2024-1-3,
    
        },
    
        {
            id:2,
            title:"jewelry-page2",
            imgSrc:"./images/jewelryproject-secondpage.png",
            category:"web design",
            date:2024-1-3,
    
        },
        {
            id:3,
            title:"jewelry-page3",
            imgSrc:"./images/jewelryproject-thirdpage.png",
            category:"web design",
            date:2024-1-3,
    
        },
        {
            id:4,
            title:"jewelry-page4",
            imgSrc:"./images/jewelryproject-fourthpage.png",
            category:"web design",
            date:2024-1-3,
    
        },
    
        {
            id:5,
            title:"nuj-page1",
            imgSrc:"./images/nuj-firstpage.png",
            category:"web design",
            date:2024-9-23,
    
        },
        {
            id:6,
            title:"nuj-page2",
            imgSrc:"./images/nuj-secondpage.png",
            category:"web design",
            date:2024-9-23,
    
        },
        {
            id:7,
            title:"nuj-page3",
            imgSrc:"./images/nuj-thirdpage.png",
            category:"web design",
            date:2024-9-23,
    
        },
        {
            id:8,
            title:"nuj-page4",
            imgSrc:"./images/nuj-fourthpage.png",
            category:"web design",
            date:2024-9-23,
    
        }
    ]

    const [showModal,setShowModal]=useState(false);
    const [selectedImage,setSelectedImage]=useState(null);

    const handleShowModal=(project)=>{
        setSelectedImage(project);
        setShowModal(true);
    };

    const handleCloseModal=()=>{
        setShowModal(false);
        setSelectedImage(null);
    }

    return(
        <motion.div  initial={{opacity:0, y:70}}
        animate={{opacity:1 ,y:0}}
        exit={{opacity:0,y:70}}
        transition={{duration:0.8}}>
        <PageHeader title="Portfolio"/>

        <motion.div  initial={{opacity:0, y:70}}
        animate={{opacity:1 ,y:0}}
        exit={{opacity:0,y:70}}
        transition={{duration:0.9}}>
        <Container >
            <h2 className="mb-4 text-center">My Websites</h2>
            <Row>
                {projects.map((project) =>(
                    <Col key={project.id} md={4} className="mb-4">
                        
                        <Card className="portfolio-item">
                            <div className="overlay-icon">
                                <FaSearchPlus onClick={()=>handleShowModal(project)}/>
                               </div>
                               {/* <div className="overlay-icon2">
                               <BiLink/>
                               </div> */}
                            <Card.Img variant="top" src={project.imgSrc}/>
                               
                                {/* <Card.Body className="text-center">
                                    <div className="overlay-text">{project.title}</div>
                                </Card.Body> */}
                        </Card>
                    </Col>
                ))}
                
            </Row>

            <Modal show={showModal} onHide={handleCloseModal} fullscreen>
                {selectedImage && (
                    <>
                    <Modal.Header closeButton>
                       
                    </Modal.Header>
                    <Modal.Body>
                        <img src={selectedImage.imgSrc} alt={selectedImage.title} className="img-fluid "/>
                         <Modal.Title>{selectedImage.title}</Modal.Title>
                    </Modal.Body>
                    </>
                )}
            </Modal>
        </Container>
        </motion.div> 
        </motion.div>    
    )
}
export default Portfolio;