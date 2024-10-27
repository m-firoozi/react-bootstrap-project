import React from "react";
import { useState,useEffect } from "react";
import { Button } from "react-bootstrap";
import "./scrollTop.css";


const ScrollToTop= () =>{
    const [isVisisble,setIsVisible] =useState(false);
    const [lastScrollY,setLastScrollY]=useState(0);
    const handleScroll=() =>{
        if(window.scrollY > 50) {
            if(window.scrollY > lastScrollY){
                setIsVisible(true);
            }else{
                setIsVisible(false);
            } 
        }
            else{
                setIsVisible(false);
            }
            setLastScrollY(window.scrollY);
        };
        useEffect(() => {
            window.addEventListener('scroll',handleScroll);
            return() =>{
                window.removeEventListener("scroll",handleScroll);
            };
        },[lastScrollY]);
        
        const ScrollToTop=() =>{
            window.scrollTo({
                top:0,
                behavior:"smooth"
            })
        };
        return(
            <Button onClick={ScrollToTop} className={`scroll-to-top ${isVisisble ? "show" : ""}`} variant="dark"><i className="fas fa-arrow-up"></i></Button>
        )
    }

export default ScrollToTop;