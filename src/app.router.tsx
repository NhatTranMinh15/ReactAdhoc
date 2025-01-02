import { createBrowserRouter, Navigate } from "react-router-dom";
import User from "./pages/user/User";
import Auth from "./pages/auth/auth";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/sign-up/sign-up";
import ResetPassword from "./pages/auth/reset-password/reset-password";
import Home from "./pages/home/Home";
import Preview from "./pages/submission/Submissions";
import PreviewDetail from "./pages/submission/SubmissionDetail";
import { AuthProvider } from "./context/AuthContext";

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
                        path: 'user/:id',
                        element: <User />,
                    },
                    {
                        path: 'previews',
                        element: <Preview />,
                    },
                    {
                        path: 'previews/:id',
                        element: <PreviewDetail />,
                    },
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