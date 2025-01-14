import './App.css';
import { RouterProvider } from 'react-router';
import appRouter from './app.router';

function App() {
    return (
        <RouterProvider router={appRouter} />
    )
}

export default App;
