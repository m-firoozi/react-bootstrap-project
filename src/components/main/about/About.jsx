import React from "react";
import PageHeader from "../pageHeader/PageHeader";
import PersonalInfo from "./personalInformation/PersonalInfo";
import Skills from "./skills/Skills";

const About=()=>{
    return(
        <>
        <PageHeader title="About"/>
        <PersonalInfo/>
        <Skills/>
        </>
    )
}
export default About;