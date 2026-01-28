import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import ServicePage from "../pages/ServicePage/ServicePage";
import { APPROUTES } from "../constants/routes/appRoutes";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/Signup";
import MainLayout from "../layouts/mainLayout/MainLayout";
import CartPage from "../pages/Cart/CartPage";
import ShippingDetails from "../pages/ShippingDetails/ShippingDetails";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import HelpCenter from "../pages/HelpCenter/HelpCenter";
import WishlistPage from "../pages/WishlistPage/WishlistPage";

// Protected Route wrapper component
const ProtectedRoute = ({ children }) => {
    return (
        <>
            <SignedIn>{children}</SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
};

const AppRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MainLayout />}>
                <Route index path={APPROUTES.HOME} element={<Home />} />

                <Route path={APPROUTES.LOGIN} element={<Login />} />
                <Route path="/login/*" element={<Login />} />
                <Route path={APPROUTES.SIGNUP} element={<SignUp />} />
                <Route path="/signup/*" element={<SignUp />} />

                <Route path={APPROUTES.ABOUT} element={<About />} />
                <Route path={APPROUTES.HELP_CENTER} element={<HelpCenter />} />
                <Route path={APPROUTES.CONTACT} element={<Contact />} />
                <Route
                    path={APPROUTES.SERVICES}
                    element={
                        <Navigate to={APPROUTES.SERVICES_REDIRECT} replace />
                    }
                />
                <Route
                    path={APPROUTES.SERVICE_DETAIL}
                    element={<ServicePage />}
                />
                <Route
                    path={APPROUTES.CART}
                    element={
                        <ProtectedRoute>
                            <CartPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={APPROUTES.WISHLIST}
                    element={
                        <ProtectedRoute>
                            <WishlistPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={APPROUTES.SHIPPING}
                    element={
                        <ProtectedRoute>
                            <ShippingDetails />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={APPROUTES.CHECKOUT}
                    element={
                        <ProtectedRoute>
                            <CheckoutPage />
                        </ProtectedRoute>
                    }
                />
            </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default AppRoutes;
