import React, { useState, useEffect, useContext} from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from '../../context/AuthContext';
import {useHistory} from "react-router-dom";
import API from "../../utils/API";
import { Link } from 'react-router-dom';


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
 function Login() {
  const history = useHistory();
  const classes = useStyles();
  const [formObject, setFormObject] = useState({})
  const {isLoggedIn, user, setIsLoggedIn, setUser } = useContext(AuthContext);

  useEffect(() => {
  }, [])

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log('hello')
    if (formObject.username && formObject.password) {
      API.saveUser({
        username: formObject.username,
        password: formObject.password
      })
        .then(res =>
           console.log(res),
          setIsLoggedIn(true),
          console.log(isLoggedIn),
  history.replace('/profile')
           )
        .catch(err => console.log('aaaaaaaaaaaa'));
  };
}


  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
    console.log(formObject)
  };



  return (
      <div className={classes.main}>
        <h1 className={classes.title}>Please login using your Email and Password</h1>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField required id="standard-required" label="username" name="username" onChange={handleInputChange} />
            <TextField
              id="standard-password-input"
              required id="standard-required"
              label="Password"
              type="password"
              autoComplete="current-password"
              name="password" onChange={handleInputChange}
            />
            <input type="submit" value="Submit" className="btn btn-success" onClick={handleFormSubmit} />
            <Link to="/" className="btn btn-success">Return</Link>
            <br></br>
            <a className={classes.link} href="/signup">Signup Here!</a>
              
        </form>
      </div>
    );
  }

export default Login;