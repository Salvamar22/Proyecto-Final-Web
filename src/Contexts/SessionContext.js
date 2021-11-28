import React, {useCallback, useMemo, useEffect, useState} from "react";
import sessionServices from "../Services/session.services.js"

const SessionContext = React.createContext();
const TOKEN_KEY = "token";

export const SessionProvider = (props) => {
    const [token, setToken] = useState(undefined);
    const [user, setUser] = useState(undefined);

    const setTokenAll = (newToken) => {
        localStorage.setItem(TOKEN_KEY, newToken);
        setToken(newToken);
    }
    
    useEffect(() => {
        const verifyToken = async () => {
            const tokenLS = localStorage.getItem(TOKEN_KEY);

            if(tokenLS) {
                const {username, role} = await sessionServices.verifyToken(tokenLS);
                
                if(username && role) {
                    setUser({ username, role});
                    setTokenAll(tokenLS);
                }
            }
        };

        verifyToken();
    }, [token])
    
    const value = useMemo( () => ({
        token: token,
        user: user
    }), [token, user])

    return <SessionContext.Provider value = {value} {...props}/>
}

export const useSessionContext = () => {
    const context = React.useContext(SessionContext);

    if(!context){
        throw new Error("Ha ocurrido un error");
    }

    return context;
}