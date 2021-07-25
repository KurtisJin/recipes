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
        
        <TextField required id="standard-required" label="Email" defaultValue="" />
        <TextField
          id="standard-password-input"
          required id="standard-required"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        
        
      </div>
    </form>
  );
}

export default Signup;