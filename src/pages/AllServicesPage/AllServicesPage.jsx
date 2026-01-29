import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { APPROUTES } from "../../constants/routes/appRoutes";
import { pageTransition, slideUp, staggerContainer } from "../../utils/animations";
import { useTranslation } from "react-i18next";
import api from "../../services/api";

const AllServicesPage = () => {
    const { t } = useTranslation();
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
                console.error("Failed to fetch services:", err);
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
            className="w-full py-20"
        >
            <div className="max-w-7xl mx-auto p-4">
                <motion.h1
                    className="text-4xl font-bold mb-8 text-center"
                    variants={slideUp}
                >
                    {t('Our Services')}
                </motion.h1>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id || service._id}
                            variants={slideUp}
                            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                        >
                            <Link to={`${APPROUTES.SERVICES}/${service.title.toLowerCase()}`} className="flex flex-col h-full">
                                <div className="relative h-64 overflow-hidden bg-gray-100">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                                    <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-sm text-gray-500">
                                            {service.subcategories?.length || 0} {t('services available')}
                                        </span>
                                        <button className="bg-[#6b4f36] text-white px-4 py-2 rounded-md hover:bg-yellow-950 transition-colors">
                                            {t('View Details')}
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AllServicesPage;
