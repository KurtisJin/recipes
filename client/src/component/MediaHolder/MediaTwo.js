import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { makeStyles } from '@material-ui/core/styles';

// import './style.css'

const useStyles = makeStyles((theme) => ({

    mediaTwo: {
        minHeight: '50vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px',
    }

}));

export default function Media()  {
    const classes = useStyles();
    return (
     <ReactPlayer width="419px" height="235px" controls="true" playing="false" className={classes.mediaTwo} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
    )

}