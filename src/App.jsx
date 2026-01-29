import "./App.css";
import AppRoutes from "./routes/index.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store/index.js";
import { ToastProvider } from "./context/ToastContext.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

const App = () => {
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <Provider store={store}>
                <BrowserRouter>
                    <ToastProvider>
                        <AppRoutes />
                    </ToastProvider>
                </BrowserRouter>
            </Provider>
        </ClerkProvider>
    );
};

export default App;
