import React from "react";
import { useState } from "react";
import { ProgressBar,Container,Row,Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import "./skills.css";

const Skills=()=>{
   const{ref, inView}=useInView({triggerOnce:true});

   const skills=[
    {name: "HTML" , level:90},
    {name: "CSS" , level:90},
    {name: "JavaScript", level:65},
    {name:"React", level:60},
    {name:"Bootstrap", level:70}
   ]

   return(
    <Container >
        <div className="skills-header">
            <h6 className="skills-title">skills</h6>
        </div>
       
        <h2 className="skills-main-title mb-5">MY SKILLS</h2>
        <Row ref={ref}>{skills.map((skill,index) =>(
            <Col key={index} md={6} className="mb-4">
                <div className="text-white d-flex justify-content-between mb-1"><span>{skill.name}</span><span>{skill.level}%</span></div>
                <ProgressBar now={inView ? skill.level : 0}  className="bg-dark progress-bar-rectangular" animated/>
            </Col>
        ))}
            </Row>
    </Container>
   )
}
export default Skills;