import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,updateProfile } from "firebase/auth"
import { auth } from "../firebase/firebase.config"

 const AuthProvider =({children})=>{
    const [user,setUser] = useState(null)
const [loading,setloading] = useState(true)

const createUser =(email,password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const signInUser =(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const signOutUser =() =>{
    setloading(true)
    return signOut(auth)
}

  const updateUserProfile = (displayName, photoURL) => {
            return updateProfile(auth.currentUser, {displayName, photoURL})
    }

 useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser);
            setloading(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])

const authInfo={
createUser,
signInUser,
signOutUser,
updateUserProfile,
user,
loading,

}
return(
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
)
}
export default AuthProvider