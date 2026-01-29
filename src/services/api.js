import axios from "axios";
import store from "../store/index";
import { logout } from "../features/auth/authSlice";
import { toast } from "react-toastify";

// Use environment variable for API URL, fallback to localhost for development
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";


const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        const state = store.getState();
        const token = state.auth.user?.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const { status, data } = error.response;

            if (status === 401) {
                toast.error("Session expired. Please log in again.");
                store.dispatch(logout());
            } else if (status >= 400 && status < 500) {
                toast.error(data?.message || "Something went wrong.");
            } else {
                toast.error("Server error. Try again later.");
            }
        } else {
            toast.error("Network error. Please check your connection.");
        }
        return Promise.reject(error);
    }
);

export default api;
