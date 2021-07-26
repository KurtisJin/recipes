import React, { Component, useEffect, useState } from 'react';
// import Animate from 'animate.css-react';
// import Navbar from '../Navigation/Navbar'

export default function Scroll() {
    
   
    const [scroll, setScroll] = useState(false);
    
    useEffect(() => {

        
        const navBar = document.querySelector(".navbar");
        const scrollUpBtn = document.querySelector(".scroll-up-btn")
        
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