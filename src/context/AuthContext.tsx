import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { AuthContextValue, Token, UserDetail } from '../types/Auth';


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
    const user: UserDetail = await fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    }).then(res => res.json())
    return user
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!getToken());
    // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
    const [user, setUser] = useState<UserDetail | null>(null);
    useEffect(() => {
        const getUserData = async () => {
            const token = getToken()
            if(token){
                const userData = await fetchUserData(token.accessToken);
                setUser(userData);
            }
        };

        getUserData();
    }, []);

    async function login(token: string) {
        const userData = await fetchUserData(token);
        setUser(userData);
        setIsLoggedIn(true)
    }

    function logout() {
        setUser(null)
        setIsLoggedIn(false)
        sessionStorage.removeItem("loginUser")
        localStorage.removeItem("loginUser")
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

