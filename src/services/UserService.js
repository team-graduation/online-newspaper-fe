import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/auth";

class UserService {
    constructor() {
        this.token = JSON.parse(localStorage.getItem('user'))?.token;
    }

    getAllUser(){
        return axios({
            method: 'get',
            url: USER_API_BASE_URL + '/admin/users',
            headers: {
                Authorization: 'Bearer ' + this.token,
            }
        });
    }

}

export default new UserService()