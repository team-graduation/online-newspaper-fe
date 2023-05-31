import axios from 'axios';

const LOGIN_API_BASE_URL = "http://localhost:8080/api/login";
const REGISTER_API_BASE_URL = "http://localhost:8080/api/register";


 const login = (user) => {
        return axios.post(LOGIN_API_BASE_URL, user);
    }
 const register = (user) => {
        return axios.post(REGISTER_API_BASE_URL, user);
    }

    const Service = {
        login,
        register
    }

export default Service;