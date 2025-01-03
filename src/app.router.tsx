import { createBrowserRouter, Navigate } from "react-router-dom";
import User from "./pages/user/User";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/sign-up/sign-up";
import ResetPassword from "./pages/auth/reset-password/reset-password";
import Home from "./pages/home/Home";
import { AuthProvider } from "./context/AuthContext";
import Submissions from "./pages/submission/Submissions";
import SubmissionDetail from "./pages/submission/SubmissionDetail";
import Admin from "./pages/home/Admin";

const appRouter = createBrowserRouter([
    {
        element: <AuthProvider />,
        children: [
            {
                path: '',
                element: <Navigate to="/home" replace />
            },
            {
                path: 'home',
                element: <Home />,
                children: [
                    {
                        path: 'user/',
                        element: <User />,
                    },
                    {
                        path: 'user/:id',
                        element: <User />,
                    },
                    {
                        path: "",
                        element: <Admin />,
                        children: [
                            {
                                path: 'submissions',
                                element: <Submissions />,
                            },
                            {
                                path: 'submissions/:id',
                                element: <SubmissionDetail />,
                            },
                        ]
                    }

                ]
            },
            {
                path: 'auth',
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
        ]
    },
])


export default appRouter