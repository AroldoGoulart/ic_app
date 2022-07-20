import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext({ });

export const AuthProvider = ({ children }) => {
    const  [user, setUser] = useState({
        name: 'Esquilo',
        photo:  ''
    })
    const  [loading, setLoading] = useState(false)

    const signIn = async (rga, password) => {
        setLoading(true)

        // chamar api

        setUser({
            name: 'Esquilo 2',
            photo:  ''

        })

        setLoading(false)
    }


    return  (
        <AuthContext.Provider 
            value={{ 
                user,
                signIn,
                loading
             }}
        >
        {children}
      </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
export default AuthContext;