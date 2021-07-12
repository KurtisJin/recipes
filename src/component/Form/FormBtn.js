import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    
    root: {

    }

  }));

export default function Button() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary">
                Search
            </Button>
        </div>
    )
}
