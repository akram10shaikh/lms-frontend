import React from "react";
import { FaStar } from "react-icons/fa";
import studentPic from "../assets/StudentPic.jpg"
import logo from "../assets/logo.png"
import pic_1 from "../assets/Jane-Cooper.svg"

const LoginPage = () => {
    return (
        <div className="lg:flex h-[580px]">

            {/* Left: Form */}
            <div className=" md:w-[600px] lg:w-[800px] py-10 px-6 md:px-8 lg:px-10 ">

                <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-6 h-6" />
                    <span className="text-xl font-bold text-blue-600">LearnPro</span>
                </div>

                <h1 className="text-3xl font-semibold text-gray-800 mt-4">
                    Start your journey with a <span className="text-blue-600">secure login</span>
                </h1>



                {/* Login Form */}
                <form className="space-y-4">
                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            required
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600 flex justify-between">
                            Password

                            {/* Forget password  */}
                            <a href="#" className="text-sm text-blue-600 hover:underline">
                                Forget Password?
                            </a>
                        </label>
                        <input
                            type="password"
                            placeholder="Create Password"
                            required
                            className="w-full border border-gray-300 px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>


                    {/* LogIn Button  */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 "
                    >
                        Login to Learn
                    </button>


                    <div className="flex items-center justify-center my-4">
                        <hr className="w-10 border-t border-gray-300" />
                        <span className="mx-3 text-sm text-gray-500">or continue with email</span>
                        <hr className="w-10 border-t border-gray-300" />
                    </div>


                    {/* Google Button  */}
                    <button
                        type="button"
                        onClick={() => {

                            // Your custom logic here (example: console log or redirect)
                            console.log("Google login clicked");
                            // You could also redirect: window.location.href = '/google-auth';
                        }}
                        className="w-full border flex items-center justify-center gap-2 text-white border-gray-300 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition"
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Continue with Google
                    </button>


                    <p className="text-sm text-center text-gray-600 mt-2">
                        New to LearnPro?{" "}

                        {/* Sign Up */}
                        <a href="#" className="text-blue-600 hover:underline">Sign Up</a>
                    </p>

                    <p className="text-xs text-gray-400 text-center">
                        By continuing, you agree to the{" "}
                        <a href="#" className="underline text-blue-500">Terms of Service</a> &{" "}
                        <a href="#" className="underline text-blue-500">Privacy Policy</a>
                    </p>
                </form>

            </div>


            {/* Right */}
            <div className=" md:w-[600px] lg:w-[800px] px-6 md:px-8 lg:px-12 ">

                <img
                    src={studentPic}
                    alt="Students"
                    className="h-[400px] w-[600px] rounded-b-[100px]"
                />

                <div className=" md:w-[600px] lg:w-[600px] mt-2 py-2 px-4 shadow-md">

                    <p className="text-sm font-medium text-gray-900 flex items-center gap-2"><img className="w-11 h-11" src={pic_1} alt="" /> Morgan Gibbs</p>

                    <p className="text-sm text-gray-600 pt-2">
                        I completed LearnPro’s Web Development course and had a great experience.
                        It covered core technologies like HTML, CSS, JavaScript. The instructors
                        were clear, and recorded sessions made it easy to revisit fast-paced parts.
                    </p>


                </div>
            </div>


        </div>
    );
};

export default LoginPage;
