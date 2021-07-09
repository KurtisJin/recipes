import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Search from '../Search/Search'
import RandomCardOne from '../RandomTwoCard/RandomCardOne'
import RandomCardTwo from '../RandomTwoCard/RandomCardTwo'

import { Collapse } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    searchResults: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={80}>
       <RandomCardOne />
       </Collapse>
       <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={80}>

       <RandomCardTwo />
       </Collapse>
    </div>
  );
}