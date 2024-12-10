import React from "react";
import PageHeader from "../pageHeader/PageHeader";
import PersonalInfo from "./personalInformation/PersonalInfo";
import Skills from "./skills/Skills";
import Interests from "./interests/Interests";
import {motion} from "framer-motion";

const About=()=>{
    return(
        <motion.div initial={{opacity:0, y:70}}
        animate={{opacity:1 ,y:0}}
        exit={{opacity:0,y:70}}
        transition={{duration:0.8}}
        >
        <PageHeader title="About"/>
        <PersonalInfo/>
        <Skills/>
        <Interests/>
       
        </motion.div>
    )
}
export default About;