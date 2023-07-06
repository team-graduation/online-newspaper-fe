import { createContext, useEffect, useState } from "react";
import { login, register } from "../services/AuthService";
import UserService from "services/UserService";

const UserContext = createContext("");

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);
    const [allUser, setAllUser] = useState([]);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem('user');
        setUser(JSON.parse(user));
      },[]);

    async function register(credential) {
        const data = await register(credential);
    }

    const logout = () => {
        setToken(null);
    };

    const getAllUser = async () => {
        try {
            const response = await UserService.getAllUser();
            setAllUser(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteUser = async (userId) => {
        try {
            const response = await UserService.deleteUser(userId);
            getAllUser();
        } catch (error) {
            console.log(error);
        }
    }

    const getProfile = async () => {
        try {
            const response = await UserService.getProfile();
            setUser(response.data);
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
                setAllUser,
                deleteUser,
                getProfile,
                token, 
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider };
