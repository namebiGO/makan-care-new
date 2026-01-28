import { useState, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooterRoutes = ["/login", "/signup"];

    // Check if this is the first time loading the website
    const [loading, setLoading] = useState(() => {
        const hasLoadedBefore = sessionStorage.getItem("hasLoadedBefore");
        return !hasLoadedBefore; // Show loader only if not loaded before
    });

    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => {
                setLoading(false);
                // Mark that the website has been loaded
                sessionStorage.setItem("hasLoadedBefore", "true");
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [loading]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="min-h-screen flex flex-col">
                    {!noHeaderFooterRoutes.includes(location.pathname) && (
                        <Header />
                    )}
                    <main className="flex-grow">
                        <Outlet />
                    </main>
                    {!noHeaderFooterRoutes.includes(location.pathname) && (
                        <Footer />
                    )}
                </div>
            )}
        </>
    );
};

export default MainLayout;
