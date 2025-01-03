import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorText from "../../../components/ErrorText";
import { DarkThemeToggle } from "flowbite-react";
import { LoginType } from "../../../types/Auth";
import { useAuth } from "../../../context/AuthContext";
import { useState } from "react";

const registerOptions = {
    username: {
        required: { value: true, message: "Username is required" },
        minLength: {
            value: 8,
            message: "Username must have at least 8 characters"
        },
        maxLength: {
            value: 10,
            message: "Username must not be longer than 10 characters"
        }
    },
    password: {
        required: "Password is required",
        minLength: {
            value: 12,
            message: "Password must have at least 12 characters"
        },
        maxLength: {
            value: 16,
            message: "Password must not be longer than 16 characters"
        },
        pattern: {
            value: /^[A-Za-z0-9@#&!]*$/i,
            message: "Password can only contain lowercase and upppercase English characters, numbers, and @, #, &, ! symbols"
        }
    }
};

const Login = () => {
    const [currentRole, setCurrentRole] = useState<'admin' | 'user'>('admin');
    const { register, handleSubmit, formState: { errors, isSubmitting }, getValues, setValue } = useForm<LoginType>({ defaultValues: { username: "michaelw", password: "michaelwpass", remember: false } });
    const navigate = useNavigate()
    const { login } = useAuth()

    async function handleRegistration() {
        const data = getValues()
        await login(data)
        return navigate("/")
    }

    function changeRole() {
        setCurrentRole(currentRole === 'admin' ? 'user' : "admin");
        setValue('username', currentRole === "admin" ? "abigailr" : "michaelw")
        setValue('password', currentRole === "admin" ? "abigailrpass" : "michaelwpass")
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
            <Link to="/" className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 ">
                <img src="/logo.png" className="mr-4 h-11" alt="Simple KYC Logo" />
                <span>Simple KYC Authentication</span>
            </Link>
            <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-gray-900 ">
                    Sign in to platform
                    <DarkThemeToggle className="float-right" />
                </h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(handleRegistration)}>
                    <button type="button" onClick={() => { changeRole() }}>Change role to {currentRole === "admin" ? "User" : "Admin"}</button>
                    <div>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">Your Username</label>
                        <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" {...register('username', registerOptions.username)} />
                        <ErrorText error={errors.username?.message} />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" {...register('password', registerOptions.password)} />
                        <ErrorText error={errors.password?.message} />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" {...register('remember')} type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 dark:text-black" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="font-medium text-gray-900 ">Remember me</label>
                        </div>
                        <Link to='/auth/reset-password' className="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500">Lost Password?</Link>
                    </div>
                    <button type="submit" className="button button-blue">
                        {isSubmitting ? "Logging in" : "Login to your account"}
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Forgot password? <Link to='/auth/sign-up' className="text-primary-700 hover:underline dark:text-primary-500">Sign-up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;