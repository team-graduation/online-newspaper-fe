import { createContext, useEffect, useState } from "react";
import { login, register } from "../services/AuthService";
import UserService from "services/UserService";

const UserContext = createContext("");

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [allUser, setAllUser] = useState([]);

    async function register(credential) {
        const data = await register(credential);
    }

    const getAllUser = async () => {
        try {
            const response = await UserService.getAllUser();
            console.log(response)
            setAllUser(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllUser();
    }, [])


    return (
        <UserContext.Provider
            value={{
                register,
                user,
                setUser,
                allUser,
                setAllUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider };
