import React from "react";
import { IconButton } from "@material-ui/core";
import ExpendMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from "@testing-library/react";

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        color: 'red',
        fontSize: '4rem',
        marginLeft: '600px'
        
    },

}))

function ExpendArrow() {
    const classes = useStyles();
    
    return (
        <div className="downArrow">
            <IconButton>
                <ExpendMoreIcon className={classes.root} />
            </IconButton>
        </div>
    )
}

    
export default ExpendArrow;  