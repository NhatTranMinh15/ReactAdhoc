import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/sign-up/sign-up";
import ResetPassword from "./pages/auth/reset-password/reset-password";
import Home from "./pages/home/Home";
import { AuthProvider } from "./context/AuthContext";
import Submissions from "./pages/submission/Submissions";
import SubmissionDetail from "./pages/submission/SubmissionDetail";
import Admin from "./pages/home/Officer";
import Info from "./pages/info/Info";
import User from "./pages/home/User";
import Error from "./pages/home/Error";

const appRouter = createBrowserRouter([
    {
        element: <AuthProvider />,
        children: [
            {
                path: '',
                element: <Navigate to="/home" replace />,
            },
            {
                path: '/home',
                element: <Home />,
                children: [
                    {
                        path: "user",
                        element: <User />,
                        children: [
                            {
                                path: 'info/',
                                element: <Info />,
                            },
                        ]
                    },
                    {
                        path: "officer",
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

                ],
                errorElement: <Error />
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
                ],
            }
        ],
        errorElement: <Error />
    },

])


export default appRouter