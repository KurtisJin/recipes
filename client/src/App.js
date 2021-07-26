import React, { useEffect, useState } from 'react';
import {useHistory, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core/';
import StationMedia from './component/StationMedia/StationMedia'
import Header from "./component/Header/Header"
import Typing from "./component/Typing/Typing"
import { Collapse } from "@material-ui/core/"
import RandomFourReceipes from './component/RandomTwoReceipes/RandomTwoReceipes'
import Wrapper from './component/Wrapper/index'
import RandomCardTitle from './component/RandomTwoReceipes/RandomThreeTitle/RandomThreeTitle'
import MediaTitle from './component/MediaHolder/MediaTitle/MediaTitle'
import Footer from './component/Footer/Footer'
import Login from './Pages/Signup/Login'
import SignupTwo from './Pages/Signup/SignupTwo'
import Landing from './Pages/Landing/Landing';
import ProfilePage from './Pages/ProfilePage';
import axios from 'axios';
import AuthContext from './context/AuthContext';
import { useContext } from 'react';
 

const AuthenticatedRoute = ({ children, component: Component, ...props }) => {
    const [isLoading, setIsLoading] = useState(true);
    const { setIsLoggedIn, setUser } = useContext(AuthContext);
    const history = useHistory();
    useEffect(() => {
      // your api returning back req.session
      axios.get('/api/currentUser').then((user) => {
        console.log('yo!')
        setIsLoggedIn(true);
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error)
        history.replace('/login');
        setIsLoading(false);
      })
    }, [])
    return <Route {...props}>
        {!isLoading ? children || <Component /> : <div>Loading...</div>}
      </Route>
  }


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState()
    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, user, setUser}}>
        <div>
            <Router>
            <Switch>
                <Route exact path={["/", "/landing"]}>
                    <Landing />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/signup">
                    <SignupTwo />
                </Route >
                <AuthenticatedRoute exact path="/profile" component= {ProfilePage}/>
            </Switch>
            </Router>
        </div>
        </AuthContext.Provider>
    )
}

export default App;