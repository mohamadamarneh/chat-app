import React, { useState , useEffect } from 'react';

export const AuthContext = React.createContext();

export function AuthProvider(Props) {

    const [auth,setAuth]= useState({
email:null,
username:null,

    });
    useEffect(()=>{
        const email = localStorage.getItem('Email')
        if(email){
            setAuth({
                email
            });

        }
    },[])
    return (
        
            <AuthContext.Provider value={{auth , setAuth}}>
               {Props.children}
            </AuthContext.Provider>

        
    );
}
