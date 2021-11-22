import React, { useContext, createContext, useState, useEffect} from 'react';
import {auth } from '../../firebase';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}


//provider function
export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function singup(email,password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        //get current user signed-in
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        
        return unsubscribe;
   }, [])

    const value = {
        currentUser,
        singup
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
// end provider function