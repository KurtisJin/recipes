import { classExpression } from '@babel/types'
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
// import './style.css'
import MediaOne from '../MediaHolder/MediaOne'
import MediaTwo from '../MediaHolder/MediaTwo'
import MediaTitle from '../MediaHolder/MediaTitle/MediaTitle'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  media: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "white",
      // opacity: '.9',

     
  }

}));


export default function StationMedia() {
  const classes = useStyles();
  return (
    <div className={classes.media}>
      <MediaTitle/>
      <MediaOne />
      <MediaTwo />
    </div>
  )
}
  

