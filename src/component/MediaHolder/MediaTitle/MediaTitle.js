import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    randomThreeTitle: {
        fontSize: '25px',
        color: 'black',
        marginTop: '-50px',
        marginLeft: '70px',
    
    },
    part2: {
        color: 'red'
    }


  }));

export default function MediaTitle() {
    const classes = useStyles();

    return (
        <div>
        <h1 className={classes.randomThreeTitle}>We Recommend These Cooking Videos!<span className={classes.part2}> Press Play!</span></h1>
      
        </div>
    );


}