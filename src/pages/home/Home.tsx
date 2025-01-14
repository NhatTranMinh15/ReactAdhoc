import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../context/AuthContext";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";

const Home = () => {

    const { isLoggedIn } = useAuth()

    if (!isLoggedIn) {
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