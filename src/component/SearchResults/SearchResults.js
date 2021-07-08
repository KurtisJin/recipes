import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Search from '../Search/Search'

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
  return (
    <div className={classes.searchResults}>
        <Search />
        
    </div>
  );
}