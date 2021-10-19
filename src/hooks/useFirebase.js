import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();


    const createUserWithEmail = (formEmail, formPass, formName) => {
        console.log("form name", formName);
        createUserWithEmailAndPassword(auth, formEmail, formPass)
            .then(result => {
                setUser(result.user);
                setError('')
                updateProfile(auth.currentUser, {
                    displayName: formName
                }).then(() => {
                    console.log("updated");
                }).catch((error) => {
                    console.log(error.message);
                });
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
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setError('');
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
                console.log(error.message);
            })
    };

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
        createUserWithEmail,
        signUserWithEmail
    }
}
export default useFirebase;