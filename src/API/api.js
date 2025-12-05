import axios from "axios";


const API = axios.create({ baseURL: "http://localhost:2004/api/v1/" });

export const registerUser = (formData) => {
    return API.post("/users/register", formData);
}