import { useState } from "react"
import { AuthContext } from "./AuthContext"

const AuthProvider =({children})=>{
    const [user,setUser] = useState(null)
const [loading,setloading] = useState(true)

const createUser =(email,password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

consy authInfo={

}
return(
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
)
}