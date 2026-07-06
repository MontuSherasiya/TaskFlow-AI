import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {useForm} from 'react-hook-form'

import {login} from '../../features/auth/authSlice.js';
import { loginUser } from '../../services/auth.service.js'

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            const response = await loginUser(data);

            dispatch(login(response));

            navigate("/");
        } catch (error) {
            console.log(error)
            console.log(error.response)
            alert(error.response?.data?.message || "Login Failed");
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                <h1 className="text-3xl font-bold text-center text-blue-600">
                    TaskFlow AI
                </h1>

                <p className="text-center text-gray-500 mt-2">
                    Sign in to your account
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5 mt-8"
                >

                    {/* Email */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border rounded-lg p-3 outline-none focus:border-blue-500"
                            {...register("email", {
                                required: "Email is required",
                            })}
                        />

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border rounded-lg p-3 outline-none focus:border-blue-500"
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="text-center mt-6">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="text-blue-600 font-semibold"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;