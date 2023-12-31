import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.Config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider;

    // Create User..............................................
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // SignIN....................................................
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Sign in with Google.....................................
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    // Log out..................................................
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // Email Varification.......................................
    const emailVarify = (user) => {
        return sendEmailVerification(user);
    }

    // Password Reset or Forgate Password........................
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email);

    }
    // Obserb....................................................
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

           
               
                if(currentUser && currentUser.email){
                    const loggedUser = {
                        email: currentUser.email
                    }
                    fetch('https://car-solution-server-8i7iupbny-maruf-hussain.vercel.app/jwt', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(loggedUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            localStorage.setItem('car-token', data.token);
                        })
             }
             else{
                localStorage.removeItem('car-token')
             }
               

    });
        return () => {
            return unsubscribe();
        }
    }, [

    ])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        emailVarify,
        resetPassword,
        logOut,
        googleSignIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;