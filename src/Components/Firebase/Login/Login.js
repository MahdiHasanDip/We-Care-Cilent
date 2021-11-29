import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'

const Login = () => {
    const {handleGoogleSignIn,
        user,
        handleLogout,    
        error} = useFirebase();
        console.log(user);

        const history = useHistory();
        const location = useLocation();
        const redirect = location.state?.from || "/home";

        const handleLogin = () =>{
            handleGoogleSignIn()
            .then(result =>{
                history.push(redirect);
            })
        }

    return (
        <div>
           
                <div className="login">
               <h1>Welcome:  {user.displayName} </h1><br />
            
            <button className="btn btn-success" onClick={handleLogin}>Google Sign in</button>
            {user.email
                ?
                <button className="btn btn-success" onClick={handleLogout} className="btn btn-primary">Log Out</button>
                :
                <span></span>
                }
                </div>

        </div>
    );
};

export default Login;