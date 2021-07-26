import React, { Component, useEffect, useState } from 'react';
// import Animate from 'animate.css-react';
import Navbar from '../Navigation/Navbar'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


export default function Scroll() {
    
   
    const [scroll, setScroll] = useState(false);
    
    const [isActive, setActive] = useState(false);

    const [toggle, setToggle] = useState(false)
    
    const handleToggle = () => {
        setActive(!isActive);
    };
    
    useEffect(() => {

        
        const navBar = document.querySelector(".navbar");
        const scrollUpBtn = document.querySelector(".scroll-up-btn");
        const Html = document.querySelector(".html");
        const ScrollLink = document.querySelector(".navbar .menu li a");
        const MenuButtonI = document.querySelector(".menu-btn i");
        const MenuButton = document.querySelector(".menu-btn");
        const navBarMenu = document.querySelector(".navbar .menu");
        
        const scrollHandler = () =>  {
            if(window.scrollY > 20) {   
                navBar?.classList.add("sticky");
               
            }else{
               navBar?.classList.remove("sticky");
            }
            if(window.scrollY > 500) {
                scrollUpBtn?.classList.add("show");
            } else {
                scrollUpBtn?.classList.remove("show");
            }
        }
         
        const ScrollUpButton = () => {
            scrollUpBtn.onClick = () => {
                <ScrollAnimation animateIn="fadeIn" scrollTop= "0">
                    {Html.scrollIntoView()}
                </ScrollAnimation>
            }

            ScrollLink.onClick = () => {
                Html.style.scrollBeHavior = "smooth" 
                //I am lost here too... 
            }
            MenuButton.onClick = () => {
                
                navBarMenu.handleToggle("active");
                MenuButtonI.handleToggle("active")
                //I don't think I am using handleToggle right...
            }
        }



        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };

    }, []);
    return (
        <></>
    )
}