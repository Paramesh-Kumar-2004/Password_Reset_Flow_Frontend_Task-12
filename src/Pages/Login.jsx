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

            <div className="relative z-10 w-full max-w-md bg-black/30 border-2 border-cyan-600 shadow-[0_0_10px_rgba(0,0,0,0.8)] rounded-lg p-8 text-center">

                <form>

                    <h3 className="text-[#00CFFF] text-2xl font-extrabold italic mb-6">
                        Login
                    </h3>

                    <div>
                        <label className="block text-left text-[#00CFFF] font-bold text-lg mb-1">
                            Email :
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full p-3 mb-4 bg-black/40 border-[3px] border-sky-400 rounded-lg text-[rgba(0,207,255,0.8)] font-bold text-base outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-left text-[#00CFFF] font-bold text-lg mb-1">
                            Password :
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            className="w-full p-3 bg-black/50 border-[3px] border-sky-400 rounded-lg text-[rgba(0,207,255,0.8)] font-bold text-base outline-none"
                        />

                        <p className="mt-1 text-right text-[#00E5FF] font-bold text-sm cursor-pointer transition text-shadow hover:text-sky-400">
                            🤫 Hide Password
                        </p>
                    </div>


                    <div>
                        <div className='flex justify-center items-center'>
                            <h1 className='text-gray-300 font-semibold'>
                                Forget Password ?
                            </h1>
                            <Link
                                to="/forgetpassword"
                                className="ml-2 font-bold text-lg px-2 py-1 rounded transition text-[rgba(0,207,255,0.8)] hover:text-rose-600"
                            >
                                Reset Here
                            </Link>
                        </div>
                        <div className="flex justify-center items-center">
                            <h1 className='text-gray-300 font-semibold'>
                                Don't Have An Account ?
                            </h1>
                            <Link
                                to="/register"
                                className="inline-block font-bold text-lg px-2 py-1 rounded transition hover:scale-110 text-[rgba(0,207,255,0.8)] hover:text-sky-600"
                            >
                                Register Now
                            </Link>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="mt-4 w-full py-3 bg-blue-800 text-[#00CFFF] text-lg rounded-lg hover:scale-105 transition cursor-pointer"
                    >
                        Login
                    </button>

                </form>

            </div>
        </div>

    )
}

export default Login