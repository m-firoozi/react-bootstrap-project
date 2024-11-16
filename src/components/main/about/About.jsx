import React from "react";
import PageHeader from "../pageHeader/PageHeader";
import PersonalInfo from "./personalInformation/PersonalInfo";
import Skills from "./skills/Skills";
import Interests from "./interests/Interests";

const About=()=>{
    return(
        <>
        <PageHeader title="About"/>
        <PersonalInfo/>
        <Skills/>
        <Interests/>
       
        </>
    )
}
export default About;