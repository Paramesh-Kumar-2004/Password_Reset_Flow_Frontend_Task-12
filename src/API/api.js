import axios from "axios";


const API = axios.create({
    // baseURL: "http://localhost:2004/api/v1",
    baseURL: "https://password-reset-flow-backend-task-12.onrender.com/api/v1",
    withCredentials: true
});



export const RegisterUser = async (userData) => {
    const response = await API.post("/user/register", userData);
    return response;
};

export const LoginUser = async (loginData) => {
    const response = await API.post("/user/login", loginData);
    return response;
}


export const GetUserDetail = async () => {
    const response = await API.get("/user/getuser")
    return response
}


export const ForgetUserPassword = async (email) => {
    const response = await API.post("/user/forgetpassword", email);
    return response;
}

export const ResetUserPassword = async (id, token, password) => {
    const response = await API.put(`/user/resetpassword/${id}/${token}`, password);
    return response;
}