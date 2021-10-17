import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut} from "firebase/auth";
import initializeAuth from "../firebase/firebase.init";

initializeAuth();

const useFirebase = () => {
    const [user , setUser] = useState({});


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const signInUsingGoogle = () => {
       return signInWithPopup(auth,googleProvider);
    }

    const googleSignOut = () => {
        signOut(auth).then(()=>{
            setUser({});
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
          });
    },[])

    

    return {
        user,
        signInUsingGoogle,
        googleSignOut
    }
}

export default useFirebase;