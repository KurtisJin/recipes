import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core/';
import StationMedia from './component/StationMedia/StationMedia'
import Header from "./component/Header/Header"
import Typing from "./component/Typing/Typing"
import { Collapse } from "@material-ui/core/"
import RandomFourReceipes from './component/RandomTwoReceipes/RandomTwoReceipes'
import Wrapper from './component/Wrapper/index'
import RandomCardTitle from './component/RandomTwoReceipes/RandomThreeTitle/RandomThreeTitle'
import MediaTitle from './component/MediaHolder/MediaTitle/MediaTitle'
import Footer from './component/Footer/Footer'
import Signup from './Pages/Signup/Signup'
import SignupTwo from './Pages/Signup/SignupTwo'
import Landing from './Pages/Landing/Landing';
import ProfilePage from './Pages/ProfilePage';



function App() {
    return (
        <div>
        <Router>
    {/* <ProfilePage/> */}
    <SignupTwo />
        </Router>
    </div>
    )
}

export default App;