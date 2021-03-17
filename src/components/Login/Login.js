
import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import firebaseConfig from './firebase.config';



const Login = () => {
    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0 ){
        firebase.initializeApp(firebaseConfig);
        }
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL} = result.user;
                const signedInUser = {name: displayName, email}
                console.log(displayName, email);
                setLoggedInUser(signedInUser)
                history.replace(from)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }

    return (
        <div>
            <h1>welcome to login</h1>
            <Button
                onClick={handleGoogleSignIn}
                variant='danger'>Sign In</Button>
        </div>
    );
};

export default Login;