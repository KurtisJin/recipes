import React from 'react';
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

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '90%',
      margin: '0 auto',
    },
    appbar: {
        background: 'none',
    },

    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }),
  );
  
   function Header() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
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
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar} elevation={0}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            
            <Button ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}color="inherit">Login</Button>
          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Login</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
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
      </div>
    );
    } 
export default Header;  