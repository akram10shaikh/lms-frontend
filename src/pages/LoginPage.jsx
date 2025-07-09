// import React from "react";
import { FaStar } from "react-icons/fa";
import studentPic from "../assets/StudentPic.jpg"
import logo from "../assets/logo.png"
import pic_1 from "../assets/Jane-Cooper.svg"
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import React, { useState } from "react";



const LoginPage = () => {

    // Handle Google login success
    const handleGoogleLogin = async (credentialResponse) => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/google-auth/`, {
                token: credentialResponse.credential,
            });
            alert(res.data.message || "Google Sign-In successful!");
        } catch (err) {
            console.error("Google Sign-In failed:", err.response?.data || err.message);
            alert("Google Sign-In failed");
        }
    };
    const login = useGoogleLogin({
        onSuccess: handleGoogleLogin,
        onError: () => {
            console.log('Google Login Failed');
            alert('Google Login Failed');
        },
        flow: 'implicit',
    });


    //Login Submit Button
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("")



    const loginButton = async (e) => {
        e.preventDefault();

        // setEmailError("");
        // setPasswordError("");
        console.log("Email:", email);
        console.log("Password:", password);


        // Email Verify
        if (!email || !password) {
            if (!email) setEmailError("Email is required");
            if (!password) setPasswordError("Password is required");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError("Enter a valid email address");
            return;
        }

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/accounts/login/",

                { email, password },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("Login successful:", response.data);
            alert("Login Successful");
            // navigate("/dashboard");

        } catch (error) {
            console.error("Login failed:", error.response?.data || error.message);
            alert("Login Failed: " + (
                error.response?.data?.detail ||
                error.response?.data?.non_field_errors?.[0] ||
                error.message
            ));
        }

    };



    return (
        <div className="lg:flex h-auto  ">

            {/* Left: Form */}
            <div className=" md:w-[600px] lg:w-[800px] py-10 px-6 md:px-8 lg:px-10 ">

                <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-6 h-6" />
                    <span className="text-xl font-bold text-blue-600">LearnPro</span>
                </div>

                <h1 className="text-3xl font-semibold text-gray-800 mt-4">
                    Start your journey with a <span className="text-blue-600">secure login</span>
                </h1>


                {/* Login Form  */}
                <form className="space-y-4 pt-4">
                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            value={email}
                            placeholder="Enter Email"
                            onChange={(e) => {
                                setEmail(e.target.value);

                            }}
                            className={`w-full border px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 ${emailError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                                }`}
                        />
                        {emailError && <p className="text-sm text-red-600 mt-1">{emailError}</p>}
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
                            placeholder="Enter Password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setPasswordError("");
                            }}
                            required
                            className={`w-full border px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 ${passwordError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                                }`}
                        />
                        {passwordError && <p className="text-sm text-red-600 mt-1">{passwordError}</p>}

                    </div>


                    {/* LogIn Button  */}
                    <button
                        type="submit"
                        onClick={loginButton}
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
                            login()

                            console.log("Google login clicked");

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
                        <a href="./signup" className="text-blue-600 hover:underline">Sign Up</a>
                    </p>

                    <p className="text-xs text-gray-400 text-center">

                        By continuing, you agree to the{" "}
                        <a href="#" className="hover:underline text-blue-500">Terms of Service</a> &{" "}
                        <a href="#" className="hover:underline text-blue-500">Privacy Policy</a>
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
