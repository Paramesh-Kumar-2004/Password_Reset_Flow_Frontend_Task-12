import axios from "axios";


export const API = axios.create({ baseURL: "http://localhost:2004/api/v1/" });



export const registerAPI = async (userData) => {
    return await API.post("/user/register", userData);
};