import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import 'bootstrap/dist/css/bootstrap.min.css';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    main: {
      backgroundImage: `url(${process.env.PUBLIC_URL + "cooking2.jpg"})`,
      // backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "45vh",
      width: "100vh",
      marginTop: "15%",
      marginLeft: "25%",
    },

    title: {
      fontSize: "35px",
      marginBottom: "50px"
    },

    link: {
      marginLeft: "5px",
      marginTop: "7px",
    }
    
  }),
);
 function Signup() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <h1 className={classes.title}>Please login using your Email and Password</h1>
      <form className={classes.root} noValidate autoComplete="off">
          <TextField required id="standard-required" label="Email" defaultValue="" />
          <TextField
            id="standard-password-input"
            required id="standard-required"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <input type="submit" value="Submit" className="btn btn-success" />
          <input type="return" value="Return" className="btn btn-success" />
          <br></br>
          <a className={classes.link} href="/signup">Signup Here!</a>
            
      </form>
    </div>
  );
}

export default Signup;