import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    const createUserWithEmail = (formEmail, formPass) => {
        createUserWithEmailAndPassword(auth, formEmail, formPass)
            .then(result => {
                setUser(result.user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
                console.log(error.message);
            });
    }
    const signUserWithEmail = (formEmail, formPass) => {
        signInWithEmailAndPassword(auth, formEmail, formPass)
            .then(result => {
                setUser(result.user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
                console.log(error.message);
            });
    }
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setError('');
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
                console.log(error.message);
            })
    };

    const signInUsingFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                console.log(result.user);
                setError('');
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
                console.log(error.message);
            })
    }



    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user);
                setUser(user)
            }
        })
    }, [])
    return {
        user,
        error,
        logOut,
        signInUsingGoogle,
        signInUsingFacebook,
        createUserWithEmail,
        signUserWithEmail
    }
}
export default useFirebase;