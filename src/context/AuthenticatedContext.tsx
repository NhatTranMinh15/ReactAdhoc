import { createContext, ReactElement } from "react";

interface User {
    id: string;
    name: string;
    email: string;
}

const fakeUser = {
    id: "c0496ae4-697a-42c6-a21e-8f2e2c451028",
    name: "Neo Amstrong",
    email: "neo.amstrong@notarealmail.com"
}

const AuthenticatedContext = createContext<User | null>(null);

const AuthenticatedProvider = ({ children }: { children: ReactElement }) => {
    return (
        <AuthenticatedContext.Provider value={fakeUser}>
            {children}
        </AuthenticatedContext.Provider>
    )
}

export { AuthenticatedProvider, AuthenticatedContext };