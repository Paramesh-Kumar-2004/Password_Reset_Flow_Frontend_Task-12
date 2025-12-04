import React from 'react'
import Car1 from "../assets/Car_Images_1.jpg"
import { Link } from 'react-router'



const Login = () => {
    return (

        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">

            <img
                src={Car1}
                alt="bg"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10"></div>

            <div className="relative z-10 w-full max-w-md bg-black/30 border-2 border-black/50 shadow-[0_0_10px_rgba(0,0,0,0.8)] rounded-lg p-8 text-center">

                <form>

                    <h3 className="text-[#FF00CC] text-2xl font-extrabold italic mb-6">
                        Login
                    </h3>

                    

                    <div>
                        <label className="block text-left text-[#FF00CC] font-bold text-lg mb-1">
                            Email :
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full p-3 mb-4 bg-black/50 border-[3px] border-pink-600 rounded-lg text-[rgba(255,0,204,0.9)] font-bold text-base outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-left text-[#FF00CC] font-bold text-lg mb-1">
                            Password :
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            className="w-full p-3 bg-black/50 border-[3px] border-pink-600 rounded-lg text-[rgba(255,0,204,0.9)] font-bold text-base outline-none"
                        />

                        <z className="block w-full text-right text-[#FF00CC] text-sm cursor-pointer transition text-shadow">
                            🤫 Hide Password
                        </z>
                    </div>


                    <div className="flex justify-center items-center">
                        <h1 className='text-gray-300 font-semibold'>
                            Don't Have An Account ?
                        </h1>
                        <Link
                            to="/register"
                            className="text-pink-500 font-bold text-lg px-2 py-1 rounded transition hover:scale-110 hover:text-[rgba(255,0,204,0.9)]"
                        >
                            Register Now
                        </Link>
                    </div>

                    <button
                        type="button"
                        className="mt-2 w-full py-3 bg-indigo-500 text-white text-lg rounded-md hover:bg-indigo-700 hover:scale-105 transition cursor-pointer"
                    >
                        Login
                    </button>

                </form>

            </div>
        </div>

    )
}

export default Login