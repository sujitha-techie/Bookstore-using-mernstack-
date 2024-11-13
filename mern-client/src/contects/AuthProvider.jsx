import React, { Children, createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut} from "firebase/auth"

const googleprovider = new GoogleAuthProvider()
export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    //const [error, setError] = useState(null);
    const createUser = async (email, password) => {
      setLoading(true);
      //setError(null);
      return createUserWithEmailAndPassword(auth,email,password)
    };
    const loginwithGoogle = ()=>{
      setLoading(true);
      return signInWithPopup(auth,googleprovider)
    } 
    const login = (email,password) =>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = () =>{
      return signOut(auth)
    }

    useEffect(()=>{
      const unsubscibe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false)
      });
      return ()=>{
        return unsubscibe();
      }
    },[])
  
    const authInfo = {
      user,
      createUser,
      loginwithGoogle,
      loading,
      login,
      logout
    };
  return (
    <div>
     <AuthContext.Provider value={authInfo}>
        {children}
     </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
