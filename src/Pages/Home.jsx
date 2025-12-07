import React, { use, useDebugValue, useEffect, useState } from 'react'
import { Link } from 'react-router'
import { toast } from 'react-toastify'
import { GetUserDetail } from '../API/api'



const Home = () => {

    const [userDetails, setUserDetails] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [role, setRole] = useState(localStorage.getItem("role") || "normal");


    useEffect(() => {

    }, [])

    const fetchUsers = async () => {
        try {

            const response = await GetUserDetail()
            setUserDetails(response.data.user)
            console.log(userDetails);

        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong!", {
                position: "top-center",
                autoClose: 2000,
            });
        }
    }

    return (
        <div>

            <div className="w-full text-center bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">
                <h5 className="mb-3 text-2xl tracking-tight font-semibold text-heading">Password Reset Flow <br /> Task - 12</h5>
                <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                    <Link to={"register"} className="w-full sm:w-auto bg-blue-600 hover:bg-sky-700 text-white rounded-md inline-flex items-center justify-center px-4 py-3">
                        <div className="text-left rtl:text-right">
                            <div className="text-xs font-bold">Rgister Now</div>
                        </div>
                    </Link>
                    <Link to={"/login"} className="w-full sm:w-auto bg-blue-600 hover:bg-sky-700 text-white rounded-md inline-flex items-center justify-center px-4 py-3">
                        <div className="text-left rtl:text-right">
                            <div className="text-xs font-bold">Log In</div>
                        </div>
                    </Link>
                    {role === "admin" && (
                        <button onClick={fetchUsers} className="w-full sm:w-auto bg-blue-600 hover:bg-sky-700 text-white rounded-md inline-flex items-center justify-center px-4 py-3 cursor-pointer">
                            <div className="text-left rtl:text-right">
                                <div className="text-xs font-bold">Get Users</div>
                            </div>
                        </button>
                    )}
                </div>
            </div>

            {role === "admin" && (
                <div>
                    <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
                        <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Email :</h5>
                        <p class="text-body">Role : </p>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Home