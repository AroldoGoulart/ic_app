import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext({ });

export const AuthProvider = ({ children }) => {
    const  [user, setUser] = useState({
        name: 'Esquilo',
        rga: '1231244320',
        photo:  'https://www.infoescola.com/wp-content/uploads/2008/07/esquilo_128704667-1000x683.jpg'
    })
    const  [loading, setLoading] = useState(false)

    const signIn = async (rga, password) => {
        setLoading(true)

        // chamar api

        setUser({
            name: 'Esquilo 2',
            photo:  'https://www.infoescola.com/wp-content/uploads/2008/07/esquilo_128704667-1000x683.jpg',
            rga: '23143534554'
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