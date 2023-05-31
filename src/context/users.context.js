import { createContext, useEffect, useState } from "react";
import { login, register } from "../services/AuthService";

const UserContext = createContext("");

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    async function login(credential) {
        const data = await login(credential);
        setUser(data);
    }

    async function register(credential) {
        const data = await register(credential);
    }

    return (
        <UserContext.Provider
            value={{
                login,
                register,
                user,
                setUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider };
