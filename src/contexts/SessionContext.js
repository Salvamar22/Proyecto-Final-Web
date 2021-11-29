import React, {useCallback, useMemo, useEffect, useState} from "react";
import sessionServices from "../Services/session.services.js"

const SessionContext = React.createContext();
const TOKEN_KEY = "token";

export const SessionProvider = (props) => {
    const [token, setToken] = useState(undefined);
    const [user, setUser] = useState(undefined);

   
    
    useEffect(() => {
        const verifyToken = async () => {
            const tokenLS = localStorage.getItem(TOKEN_KEY);

            
            if(tokenLS) {
                const rest = await sessionServices.verifyToken(tokenLS);
                if(rest){
                    const {username, role} = rest

                    if(username && role) {
                        setUser({ username, role});
                        setTokenAll(tokenLS);
                    }
                }
                
                

                
            }
        };

        verifyToken();
    }, [token])


    const setTokenAll = (newToken) => {
        localStorage.setItem(TOKEN_KEY, newToken);
        setToken(newToken);
    }

    const login = useCallback((username, password)=> {
        const loginAsync = async () => {
            let status = false;
            try {
                const { token: tokenRes } = await sessionServices.login(username, password);

                if(tokenRes) {
                    setTokenAll(tokenRes);
                    status = true;
                }
            } catch (error) {
                console.error(error);
                console.error("Error in login");
            } finally {
                return status;
            }
        };

        return loginAsync();
    }, [])
    
    const logout = useCallback(() => {
        setUser(undefined);
        setTokenAll("");
    }, [])

    const value = useMemo( () => ({
        token: token,
        user: user,
        login: login,
        logout: logout
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

const getToken = () => localStorage.getItem(TOKEN_KEY);