import React, { useState } from 'react';
import './Login.css';
import {Link,useHistory} from "react-router-dom";
import {auth} from "./firebase";



function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const signIn = e => {
        e.preventDefault(); // this stop the refresh!!!!!
        //login page...
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push("/")
        })
        .catch(error => alert(error.message));


    };

    const register = e => {
        e.preventDefault();
        //register logic...

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            //create a user logged in..., redirect homepage
            if (auth) {
                history.push("/");

            }
           
            
        })
        .catch((e) => alert(e.message));
       
    }    
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""></img>
            </Link>

            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h4>E-mail</h4>
                    <input value={email} onChange={e =>setEmail(e.target.value)} type="email"></input>
                    <h4>Password</h4>
                    <input value={password} onChange={e =>setPassword(e.target.value)} type="password"></input>
                    <button onClick={signIn} type="submit" className="login_signInButton">Sign In</button>
                </form>
                <p>
                By Sign In you agree to the Amazon Fake Clone Conditions of Use & sale.Please  see our Privacy Notice & Cookies Notice.

                </p>
                <button onClick={register} className="login_registerButton">Create Your Amazon Account</button>
            </div>

            
        </div>
    )
}

export default Login;
