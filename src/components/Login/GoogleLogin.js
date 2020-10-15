import React from 'react';
import { useContext } from "react";
import { UserContext } from "../../App";
import firebaseConfig from "./firebase.config";
import * as firebase from "firebase/app";
import "firebase/auth";
import "./GoogleLogin.css";
import { Link, useHistory, useLocation } from "react-router-dom";

const GoogleLogin = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
    
      const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
    
      const history = useHistory();
      const location = useLocation();
      let { from } = location.state || { from: { pathname: "/dashboard" } };
    
      const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(googleProvider)
          .then(function (result) {
            const { displayName, email , photoURL} = result.user;
            const signInUser = { name: displayName, email , photoURL };
            setLoggedInUser(signInUser);
            history.replace(from);
            setIdToken();
          })
          .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      };
      const setIdToken = () => {
        firebase
          .auth()
          .currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            // Send token to your backend via HTTPS
            // ...
            sessionStorage.setItem("token", idToken);
          })
          .catch(function (error) {
            // Handle error
          });
      };
    return (
        <>
      <Link to="/">
        <div style={{ textAlign: "center" }}>
          <img
            style={{ width: "300px" }}
            src="https://i.ibb.co/6DdQDrX/logo.png" alt="logo"
          />
        </div>
      </Link>
      <div className="log-in shadow">
        <div style={{}} className="button">
          <img
            style={{ width: "25px" }}
            className="mr-5 ml-1"
            src="https://www.iconfinder.com/data/icons/social-media-2210/24/Google-512.png"
            alt="google logo"
          />
          <button className="googleButton" onClick={handleGoogleSignIn}>
            Continue with Google
          </button>
        </div>
        <p className="text-center" style={{ marginTop: "-10rem" }}>
          Don’t have an account?{" "}
          <span className="text-primary">Create an account</span>
        </p>
      </div>
    </>
    );
};

export default GoogleLogin;