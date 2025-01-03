import { createContext, useContext, useEffect, useState } from 'react'
import { AuthContextValue, LoginType, Token, UserDetail } from '../types/Auth';
import { Outlet, useNavigate } from 'react-router';


const AuthContext = createContext<AuthContextValue>({ isLoggedIn: false, user: null, async login(user) { }, logout() { }, });

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
}

function getToken() {
    const temp = sessionStorage.getItem("loginUser")
    const per = localStorage.getItem("loginUser")
    const token: Token = temp ? JSON.parse(temp) : per ? JSON.parse(per) : null
    return token;
}

async function fetchUserData(token: string) {
    const response = await fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        throw new Error()
    }
    const user: UserDetail = await response.json();
    return user
}

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
export const AuthProvider = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!getToken());
    const [user, setUser] = useState<UserDetail | null>(null);
    const navigate = useNavigate()
    useEffect(() => {
        const getUserData = async () => {
            const token = getToken()
            if (token) {
                try {
                    const userData = await fetchUserData(token.accessToken);
                    setUser(userData);
                } catch (error) {
                    navigate('/auth/login')
                }
            }
            else {
                navigate('/auth/login')
            }
        };

        getUserData();
    }, []);

    async function login(data: LoginType) {
        const remember = data.remember
        const body = {
            username: data.username,
            password: data.password
        }
        const response = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
        const responseBody: Token = await response.json()

        if (remember) {
            localStorage.setItem("loginUser", JSON.stringify(responseBody))
        } else {
            sessionStorage.setItem("loginUser", JSON.stringify(responseBody))
        }

        const userData = await fetchUserData(responseBody.accessToken);
        setUser(userData);
        setIsLoggedIn(true)
    }

    function logout() {
        sessionStorage.removeItem("loginUser")
        localStorage.removeItem("loginUser")
        setUser(null)
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            <Outlet></Outlet>
        </AuthContext.Provider>
    )
}

