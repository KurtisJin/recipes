import React, {useContext, useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core/';
import StationMedia from '../../component/StationMedia/StationMedia'
import Header from "../../component/Header/Header"
import Typing from "../../component/Typing/Typing"
import { Collapse } from "@material-ui/core/"
import RandomFourReceipes from '../../component/RandomTwoReceipes/RandomTwoReceipes'
import Wrapper from '../../component/Wrapper/index'
// import RandomCardTitle from '../../component/RandomTwoReceipes/RandomThreeTitle/RandomThreeTitle'
import MediaTitle from '../../component/MediaHolder/MediaTitle/MediaTitle'
import Footer from '../../component/Footer/Footer'
import AuthContext from '../../context/AuthContext';
import ScrollReact from '../../component/ScrollUpButton/ScrollReact'

const useStyles = makeStyles((theme) => ({
    root: { 
        // display: "flex",
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + "cooking3.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
       
        
    },

    typing: {
        marginTop: "350px",
        
    },
    
}));

function Landing() {
    const [checked, setChecked] = useState(false)
    const {isLoggedIn, user, setIsLoggedIn, setUser } = useContext(AuthContext);
    useEffect(() => {
        setChecked(true);
        console.log(isLoggedIn)
    },[])
    const classes = useStyles();
    return (
        <div className={classes.root}>
                <ScrollReact/>
                <Wrapper>       
                <CssBaseline />
                <div className="navbar">
                <Header />
                </div>
                <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={80}>
                    <div className={classes.typing}>
                    <Typing />
                    </div>
                </Collapse>
                <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={80}>
                    <StationMedia />
                </Collapse>
                <br></br>
                <br></br>
                <br></br>
                {/* <RandomCardTitle /> */}
                <RandomFourReceipes />
                </Wrapper>
                <Footer />
            
        </div>
    )
}

export default Landing;