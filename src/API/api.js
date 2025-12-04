import axios from 'axios';




const api = axios.create({
    baseURL: 'http://localhost:2004/api/v1'
})


export async function LoginUser(userdata) {
    try {
        const response = await api.post("/user/login", userdata)
        const data = response.data
        return data
    }
    catch (err) {
        const ErrorMessage = err.response.data
        return ErrorMessage
    }
}

export async function RegisterNewUser(userdata) {
    try {
        const response = await api.post("/user/register", userdata)
        const data = response.data
        return data
    }
    catch (err) {
        const ErrorMessage = err.response.data
        return ErrorMessage
    }
}

export async function ForgetPassword(userdata) {
    try {
        const response = await api.post("/user/forgetpassword", userdata)
        const data = response.data
        return data
    }
    catch (err) {
        const ErrorMessage = err.response.data
        return ErrorMessage
    }
}


export async function ResetPassword(token, email) {
    try {
        const response = await api.put(`/user/resetpassword/${token}`, email)
        const data = response.data
        return data
    }
    catch (err) {
        const ErrorMessage = err.response.data
        return ErrorMessage
    }
}

