import { useEffect } from 'react';
import './App.css';
import { initFlowbite } from 'flowbite';
import { RouterProvider } from 'react-router';
import appRouter from './App.router';
import { AuthProvider } from './context/AuthContext';

function App() {
    useEffect(() => {
        console.log("init flowbite");
        
        initFlowbite()
    },);

    return (
        <AuthProvider>
            <RouterProvider router={appRouter} />
        </AuthProvider>
    )
}

export default App;
