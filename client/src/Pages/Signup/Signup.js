import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);
 function Signup() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        
        <TextField required id="standard-required" label="Required" defaultValue="First Name" />
        <TextField disabled id="standard-disabled" label="Required" defaultValue="Last Name" />
        <TextField
          id="standard-password-input"
          label="New Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="Confirm-password"

          //TODO:got to figure out how to validate!
        />
        
      </div>
    </form>
  );
}

export default Signup;