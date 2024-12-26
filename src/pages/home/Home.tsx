import { Navigate, Outlet } from "react-router";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import { useContext } from "react";
import { AuthenticatedContext } from "../../context/AuthenticatedContext";

const Home = () => {
    const user = useContext(AuthenticatedContext)
    if (!user) {
        return <Navigate to={"/auth/login"} />
    }
    return (
        <>
            <Header />
            <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                <Sidebar />
                <main id="main-content" className="relative w-full h-full min-h-[100vh] overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
                    <Outlet></Outlet>
                    <Footer />
                </main>
            </div>
        </>
    )
}

export default Home;