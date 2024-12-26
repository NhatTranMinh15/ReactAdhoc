import { createBrowserRouter, Navigate } from "react-router-dom";
import User from "./pages/user/user";
import PersonalInformation from "./pages/user/personalInformation/PersonalInformation";
import UserKYC from "./pages/user/kyc/kyc";
import Auth from "./pages/auth/auth";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/sign-up/sign-up";
import ResetPassword from "./pages/auth/reset-password/reset-password";
import Home from "./pages/home/Home";

const appRouter = createBrowserRouter([
    {
        path: '',
        element: <Navigate to="/home" replace />
    },
    {
        path: 'home',
        element: <Home />,
        children: [
            {
                path: 'user/:id',
                element: <User />,
                // children: [
                //     {
                //         path: ':id',
                //         element: <PersonalInformation />
                //     },
                //     {
                //         path: ':id/kyc',
                //         element: <UserKYC />
                //     }
                // ]
            }
        ]
    },
    {
        path: 'auth',
        element: <Auth />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'sign-up',
                element: <SignUp />
            },
            {
                path: 'reset-password',
                element: <ResetPassword />
            }
        ]

    }
])


export default appRouter