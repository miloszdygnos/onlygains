import "../styles/login.css";
import {auth, provider} from "../firebase-config"
import {signInWithPopup} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Login( { setIsAuth, setUsername } ) {
    const navigate = useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then(() => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            setUsername(auth.currentUser.uid);
            navigate("/")
        });   
    }
    return(
        <div className="loginSection">
            <div className="loginWrapper">
                <h1 className="logo">Sign in</h1>
                <button className="login-with-google-btn" onClick={signInWithGoogle}>sign in with google</button>
            </div>
        </div>

    )
}
export default Login;