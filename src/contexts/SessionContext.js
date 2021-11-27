import React, { useState, useEffect, useMemo, useCallback } from "react";
import sessionServices from './../services/session.services';

const SessionContext = React.createContext();
const TOKEN_KEY = "token";

export const SessionProvider = (props) => {
    const [token, setToken] = useState(undefined);
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const verifyTokenAsync = async () => {
            const lsToken = getToken();

            if(lsToken) {
                const { username, role } = await sessionServices.verifyToken(lsToken);
                if(username && role) {
                    setUser({ username, role });
                    setTokenAll(lsToken);
                }
            }
        }

        verifyTokenAsync();
    }, [token])

    const setTokenAll = (token) => {
        localStorage.setItem(TOKEN_KEY, token);
        setToken(token);
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

    const value = useMemo(()=> ({
        token: token,
        user: user,
        login: login,
        logout: logout
    }), [token, user, login, logout]);

    return <SessionContext.Provider value={value} {...props} />;
}

export const useSessionContexts = () => {
    const context = React.useContext(SessionContext);

    if (!context) {
        throw new Error("useUserContext() must be inside of UserProvider");
    }

    return context;
}

const getToken = () => localStorage.getItem(TOKEN_KEY);