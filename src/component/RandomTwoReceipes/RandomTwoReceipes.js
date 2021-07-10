import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Search from '../Search/Search'
import RandomCardOne from '../RandomThreeCard/RandomCardOne'
import RandomCardTwo from '../RandomThreeCard/RandomCardTwo'
import RandomCardThree from '../RandomThreeCard/RandomCardThree'
import { Collapse } from '@material-ui/core';
import "./style.css";
import RandomThreeTitle from './RandomThreeTitle/RandomThreeTitle'
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({

    searchResults: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    
    divider: {
      color: '#FF0000',
    }

}));

export default function SearchResults() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(true);
    },[])
    // const checked = useWindowPosition();
  return (
    
    <div className={classes.searchResults}>
      <Divider className={classes.divider} />
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={80}>
       <RandomCardOne />
       </Collapse>
       <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={80}>
       <RandomCardTwo />
       </Collapse>
       <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={80}>
       <RandomCardThree />
       </Collapse>
    </div>
  );
}