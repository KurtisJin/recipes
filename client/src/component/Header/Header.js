import React, { useState, useEffect, useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from 'react'
import API from '../../utils/API'
import AuthContext from '../../context/AuthContext';
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '80%',
      maxWidth: '100%',
      marginLeft: '10%',
      backgroundColor: 'red',
      marginBottom: '150px',
      // height: "-10px",
    },
    appbar: {
        background: 'none',
    },

    menuButton: {
        marginRight: theme.spacing(2),
      },
    title: {
      flexGrow: 1,
      marginRight: "100%",
      fontSize: "40px",
      // marginBottom: "200px"
      
    },

    // navbar: {
    //   position: "fixed",
    //   width: "100%",
    //   zIndex: 999,
    //   padding: "30px 0",
    //   font: 'Ubuntu', sans-serif,
    //   transition: "all 0.3s ease",
    //   marginBottom: "100%",
    //  },

    span: {
      color: "red",
      '&:hover': {
        color: "green",
      },
    },
    
    button: {
      marginLeft: "1500%",
      fontSize: "30px",
      // marginBottom: "200px"
    },

    menuList: {
      fontSize: "25px",
    },

    }),
  );
  
   function Header() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const {isLoggedIn } = useContext(AuthContext);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
      };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
      };

      const handleCloseLogOut = (event) => {
        API.logUserOut();
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
      };

      function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        }
      }
    
      // return focus to the button when we transitioned from !open -> open
      const prevOpen = React.useRef(open);
      React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
          anchorRef.current.focus();
        }
    
        prevOpen.current = open;
      }, [open]);
  
    return (
      <div className={classes.root} className="navbar" id="header">
        <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} height="20px" bgcolor="none" color="white">
        <Container maxWidth='lg'>
        <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
        <AppBar position="static" className={classes.appbar} elevation={0}>
          <Toolbar>
           
            <Typography variant="h6" className={classes.title}>
              Pantry<span className={classes.span}>2</span>Table
            </Typography>
            
            <Button ref={anchorRef} className={classes.button}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}color="inherit">Menu</Button>
          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  {isLoggedIn ? <MenuItem className={classes.menuList} onClick={handleClose} component='a' href='/profile'>Profile</MenuItem>:<div></div>}
                   {!isLoggedIn ? <MenuItem className={classes.menuList} onClick={handleClose}component='a' href='/login'>Login</MenuItem> :
                   <MenuItem className={classes.menuList} onClick={handleCloseLogOut}component='a' href='/'>Logout</MenuItem>}
                     {!isLoggedIn ? <MenuItem className={classes.menuList} onClick={handleClose}component='a' href='/signup'>Signup</MenuItem>:<div></div>}
                    {/* //TODO: need to figure out how to do login to show when user is not logged in and logout only shows
                    //when only logged in.  */}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
          </Toolbar>
        </AppBar>
        </Grid>
        </Grid>
        </Container>
        </Box>
      </div>
      
    );
    } 
export default Header;  