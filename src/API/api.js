import axios from "axios";


export const API = axios.create({ baseURL: "http://localhost:2004/api/v1/" });



export const RegisterUser = async (userData) => {
    const response = await API.post("/user/register", userData);
    return response;
};

export const LoginUser = async (loginData) => {
    const response = await API.post("/user/login", loginData);
    return response;
}