import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.Config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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

    // Email Varification.......................................
    const emailVarify = (user) =>{
        return sendEmailVerification(user);
    }

    // Password Reset or Forgate Password........................
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth , email);
       
    }
    // Obserb....................................................
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
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
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;