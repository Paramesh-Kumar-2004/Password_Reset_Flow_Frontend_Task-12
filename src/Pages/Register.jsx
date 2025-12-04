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

            <div className="absolute inset-0 bg-black/10"></div>

            <div className="relative z-10 w-full max-w-md bg-black/10 border border-black/10 shadow-[0_0_10px_rgba(0,0,0,0.8)] rounded-lg p-8 text-center">

                <form>

                    <h3 className="text-pink-500 text-2xl font-extrabold italic mb-6">
                        Register
                    </h3>

                    <div>
                        <label className="block text-left text-pink-700 font-bold text-lg mb-1">
                            Name :
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="w-full p-3 mb-4 bg-black/70 border-4 border-sky-400 rounded-2xl text-rose-300 font-bold text-base outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-left text-pink-700 font-bold text-lg mb-1">
                            Email :
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full p-3 mb-4 bg-black/70 border-4 border-sky-400 rounded-2xl text-rose-300 font-bold text-base outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-left text-pink-700 font-bold text-lg mb-1">
                            Password :
                        </label>

                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            className="w-full p-3 bg-black/70 border-4 border-sky-400 rounded-2xl text-rose-300 font-bold text-base outline-none"
                        />

                        <p className="mt-1 text-right text-pink-700 font-bold text-sm cursor-pointer transition text-shadow hover:text-pink-400">
                            🤫 Hide Password
                        </p>
                    </div>

                    <Link
                        to="/login"
                        className="inline-block mt-3 font-bold text-lg px-2 py-1 rounded transition text-pink-600 hover:text-pink-500"
                    >
                        Login Now
                    </Link>

                    <button
                        type="button"
                        className="mt-4 w-full py-3 bg-indigo-500 text-white text-lg rounded hover:bg-indigo-700 hover:scale-105 transition"
                    >
                        Register
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Register
