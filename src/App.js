import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core/';

import Header from "./component/Header/Header"
import Typing from "./component/Typing/Typing"
import { Collapse } from "@material-ui/core/"
import SearchResults from './component/SearchResults/SearchResults'


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + "cooking3.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
    }
}));

function App() {
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(true);
    },[])
    const classes = useStyles();
    return <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={80}> 
            <Typing />
        </Collapse>
        <SearchResults/>
    </div>
}

export default App;