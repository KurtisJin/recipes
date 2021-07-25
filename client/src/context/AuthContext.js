import React from 'react';

const AuthContext = React.createContext({
    isLoggedin: false,
    user: {},
    setIsLoggedin: () =>{},
    setUser: () => {},
});
export default AuthContext