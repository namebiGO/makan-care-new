import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../../components/hero/Hero";
import LastSection from "../../components/LastSection/LastSection";
import InstagramSection from "../../components/Instagram/InstagramSection.jsx";
import Service2 from "../../components/Services/Service2.jsx";
import Testimonial from "../../components/Testimonials/Testimonial.jsx";
import Features from "../../components/Features/Features.jsx";
import BlogSection from "../../features/BlogSection/BlogSection.jsx";
import { pageTransition } from "../../utils/animations.js";
import api from "../../services/api.js";

const Home = () => {
    const [services, setServices] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await api.get('/services');
                if (response.data.data && response.data.data.length > 0) {
                    setServices(response.data.data);
                } else {
                    setError('No services available at the moment.');
                }
            } catch (err) {
                console.error('Failed to fetch services:', err);
                setError('Failed to load services. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchServices();
    }, []);

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
                    <p className="text-gray-600">{error}</p>
                </div>
            </div>
        );
    }

    // Don't render until services are loaded
    if (isLoading || services.length === 0) {
        return null;
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
        >
            <Hero />
            <Features />
            {services.map(service => (
                <Service2 key={service.id || service._id} service={service} />
            ))}
            <Testimonial />
            <BlogSection />
            <InstagramSection />
            <LastSection />
        </motion.div>
    );
};

export default Home;
