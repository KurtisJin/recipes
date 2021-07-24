import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    randomThreeTitle: {
        fontSize: '25px',
        color: 'white',
        marginBottom: '50px',
        marginLeft: '70px'
    },

    part2: {
        color: 'red',
    }



  }));

export default function RandomThreeTitle() {
    const classes = useStyles();

    return (
        <h1 className={classes.randomThreeTitle}>Need Ideas? Click on <span className={classes.part2}>FREE</span> Receipes Below!</h1>
    );


}