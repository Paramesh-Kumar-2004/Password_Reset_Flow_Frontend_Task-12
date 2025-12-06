import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { toast } from 'react-toastify'
import { GetUserDetail } from '../API/api'



const Home = () => {

    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        try {

            const response = await GetUserDetail()
            setUserDetails(response.data)
            console.log(userDetails)

        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong!", {
                position: "top-center",
                autoClose: 2000,
            });
        }
    }

    return (
        <div>
            <h1>Home</h1>
            <Link to={"/register"} >Register Now</Link>
        </div>
    )
}

export default Home