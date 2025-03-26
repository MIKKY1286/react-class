import { createContext } from "react";

export const authContext = createContext() 
const AuthProvider = ({children})=>{
    const login = ()=>{
        alert('uytf')
    }
    // create a function to signup using the api endpoint for sign up in our back end 
    // url ==> http://localhost:4003/api/auth/sign-up, 
    // Method: POST,
    //  Content-Type: appliation/json
    
    const values = {
        login
    }
    return(
        <authContext.Provider value={values}>{children}</authContext.Provider>
    )
}

export default AuthProvider