import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged , signOut} from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init'

initializeAuthentication();



const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);  
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

 
    

// Sign-In with google  
const handleGoogleSignIn=() =>{
  setIsLoading(true);
 return   signInWithPopup(auth, googleProvider)
    

};

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
        setUser(user);

      const uid = user.uid; 
    }
    else{
      setUser({});
    }
    setIsLoading(false);
  });

},[])




// signout 
const handleLogout = () => {
  setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
      
  };


    return{
        handleGoogleSignIn,
        user,
        handleLogout,    
        isLoading
       };

    
};

export default useFirebase;