import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { makeStyles } from '@material-ui/core/styles';

// import './style.css'

const useStyles = makeStyles((theme) => ({

    mediaOne: {
        minHeight: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // margin: '10px',
    }

}));

export default function Media()  {
    const classes = useStyles();
    return (
     <ReactPlayer width="419px" height="235px"   className={classes.mediaOne} url='https://www.youtube.com/watch?v=mhDJNfV7hjk&ab_channel=GordonRamsay' playing />
    )

}