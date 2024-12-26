import { useEffect } from 'react';
import './App.css';
import { initFlowbite } from 'flowbite';
import { AuthenticatedProvider } from './context/AuthenticatedContext';
import { RouterProvider } from 'react-router';
import appRouter from './App.router';

function App() {
    useEffect(() => {
        initFlowbite()
    }, []);

    return (
        <AuthenticatedProvider>
            <RouterProvider router={appRouter} />
        </AuthenticatedProvider>
    )
}

export default App;
