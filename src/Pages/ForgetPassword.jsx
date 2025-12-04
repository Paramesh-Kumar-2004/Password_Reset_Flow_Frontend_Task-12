import React from 'react'
import Car2 from "../assets/Car_Images_2.jpg"
import { Link } from 'react-router'



const ForgetPassword = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">

            <img
                src={Car2}
                alt="bg"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10"></div>

            <div className="relative z-10 w-full max-w-md bg-black/30 border-2 border-cyan-600 shadow-[0_0_10px_rgba(0,0,0,0.8)] rounded-lg p-8 text-center">

                <form>

                    <h3 className="text-[#00CFFF] text-2xl font-extrabold italic mb-6">
                        Forget Password
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

                    {/* <div>
                        Do not worry! We will send you an email to reset your password.
                    </div> */}


                    <div className="flex justify-center items-center">
                        <h1 className='text-gray-300 font-bold'>
                            Remembered Your Password ?
                        </h1>

                        <Link
                            to="/login"
                            className="inline-block font-bold text-[18px] px-2 py-1 rounded transition hover:text-[rgba(0,207,255,0.8)] text-sky-700"
                        >
                            Login Now
                        </Link>
                    </div>

                    <button
                        type="button"
                        className="mt-4 w-full py-3 bg-blue-800 text-[#00CFFF] text-lg rounded-lg hover:scale-105 transition cursor-pointer"
                    >
                        Send Reset Link
                    </button>

                </form>

            </div>
        </div>
    )
}

export default ForgetPassword