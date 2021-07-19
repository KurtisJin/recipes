import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core/';
import StationMedia from '../../component/StationMedia/StationMedia'
import Header from "../../component/Header/Header"
import Typing from "../../component/Typing/Typing"
import { Collapse } from "@material-ui/core/"
import RandomFourReceipes from '../../component/RandomTwoReceipes/RandomTwoReceipes'
import Wrapper from '../../component/Wrapper/index'
import RandomCardTitle from '../../component/RandomTwoReceipes/RandomThreeTitle/RandomThreeTitle'
import MediaTitle from '../../component/MediaHolder/MediaTitle/MediaTitle'
import Footer from '../../component/Footer/Footer'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + "cooking3.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
    },


}));

function Landing() {
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(true);
    },[])
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Wrapper>
                <CssBaseline />
                <Header />
                <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={80}>
                    <Typing />
                </Collapse>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={80}>
                    <MediaTitle />
                    <StationMedia />
                </Collapse>
                <br></br>
                <br></br>
                <br></br>
                <RandomCardTitle />
                <RandomFourReceipes />
                <Footer />
            </Wrapper>
        </div>
    )
}

export default Landing;