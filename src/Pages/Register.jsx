import React from 'react'
import Car3 from "../assets/Car_Images_3.jpg"
import { Link } from 'react-router'



const Register = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">

            <img
                src={Car3}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10 w-full max-w-md bg-black/30 border-2 border-[rgb(181,174,166)] shadow-[0_0_10px_rgba(0,0,0,0.8)] rounded-lg p-6 text-center">

                <form>

                    <h3 className="text-[#00CFFF] text-2xl font-extrabold italic mb-2">
                        Register
                    </h3>

                    <div>
                        <label className="block text-left text-[#00CFFF] font-bold text-lg mb-1">
                            Name :
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="w-full p-3 mb-4 bg-black/40 border-4 border-sky-400 rounded-lg text-[rgba(0,207,255,0.8)] font-bold text-base outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-left text-[#00CFFF] font-bold text-lg mb-1">
                            Email :
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full p-3 mb-4 bg-black/40 border-4 border-sky-400 rounded-lg text-[rgba(0,207,255,0.8)] font-bold text-base outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-left text-[#00CFFF] font-bold text-lg mb-1">
                            Password :
                        </label>

                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            className="w-full p-3 bg-black/40 border-4 border-sky-400 rounded-lg text-[rgba(0,207,255,0.8)] font-bold text-base outline-none"
                        />

                        <p className="mt-1 text-right text-[#00E5FF] font-bold text-sm cursor-pointer transition text-shadow hover:text-sky-400">
                            🤫 Hide Password
                        </p>
                    </div>

                    <div className="flex justify-center items-center mt-1">
                        <h1 className='text-gray-300 font-semibold'>
                            Do You Have An Account ?
                        </h1>
                        <Link
                            to="/login"
                            className="inline-block font-bold text-lg px-2 py-1 rounded transition hover:scale-110 text-[rgba(0,207,255,0.8)] hover:text-sky-600"
                        >
                            Login Now
                        </Link>
                    </div>

                    <button
                        type="button"
                        className="mt-4 w-full py-3 bg-blue-800 text-[#00CFFF] text-lg rounded-lg hover:scale-105 transition cursor-pointer"
                    >
                        Register
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Register
