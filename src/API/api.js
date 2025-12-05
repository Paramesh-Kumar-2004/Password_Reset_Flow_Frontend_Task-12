import axios from "axios";


const API = axios.create({ baseURL: "http://localhost:2004/api/v1" });

export const registerUser = async (formData) => {
    try {
        const response = await API.post("/user/register", formData);
        return response.data
    } catch (error) {
        return error.response.data
    }
}