'use client'
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react"
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        router.push("/home");
        // e.preventDefault();
        // signIn("credentials", {
        //     email,
        //     password,
        // });
    }
    return (
        <>
        <section className="bg-gray-50 w-screen h-screen  darkt:bg-gray-900">
        <div
            className="flex flex-col w-screen h-screen justify-center items-center px-6 py-8  "
        >
            
            <div className="w-full text-right bg-white rounded-lg shadow darkt:border md:mt-0 sm:max-w-md xl:p-0 darkt:bg-gray-800 darkt:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl darkt:text-white">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="emaillogin"
                                className="block mb-2 text-sm font-medium text-gray-900 darkt:text-white"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                name="email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                value={email}
                                defaultValue='usv0308@gmail.com'
                                id="emaillogin"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 darkt:bg-gray-700 darkt:border-gray-600 darkt:placeholder-gray-400 darkt:text-white darkt:focus:ring-blue-500 darkt:focus:border-blue-500"
                                placeholder="name@company.com"
                                required=""
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="passwordlogin"
                                className="block mb-2 text-sm font-medium text-gray-900 darkt:text-white"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="passwordlogin"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                value={password}
                                defaultValue='Umesh@0308'
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 darkt:bg-gray-700 darkt:border-gray-600 darkt:placeholder-gray-400 darkt:text-white darkt:focus:ring-blue-500 darkt:focus:border-blue-500"
                                required=""
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 darkt:bg-gray-700 darkt:border-gray-600 darkt:focus:ring-primary-600 darkt:ring-offset-gray-800"
                                        required=""
                                        onChange={(e) => {
                                            setRemember(e.target.checked);
                                        }}
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="remember"
                                        className="text-gray-500 darkt:text-gray-300"
                                    >
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <a
                                href="#"
                                className="text-sm font-medium text-primary-600 hover:underline darkt:text-primary-500"
                            >
                                Forgot password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-black hover:bg-white hover:text-black  border-2 border-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center darkt:bg-primary-600 darkt:hover:bg-primary-700 darkt:focus:ring-primary-800"
                        // disabled={isLoading}
                        >
                            {/* {isLoading ? <Loader/>: "Sign in"} */}Login
                        </button>
                        <p className="text-sm font-light text-gray-500 darkt:text-gray-400">
                            Do not have an account yet?{" "}
                            <button
                                className="font-medium text-primary-600 hover:underline darkt:text-primary-500"
                                onClick={(e) => {
                                    document.getElementById('loginCloseButton').click();
                                    document.getElementById('Signupbutton').click();
                                }}
                            >
                                Sign up
                            </button>
                        </p>
                        {/* {error && <div className="text-slate-900 darkt:text-white text-sm">{error}</div>} */}
                    </form>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
