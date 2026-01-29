import React, { useState, useEffect } from "react";
import Services from "../../components/Services/Services";
import { useParams } from "react-router-dom";
import api from "../../services/api";

const ServicePage = () => {
    const { service } = useParams();
    const [selectedService, setSelectedService] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await api.get('/services');

                let foundService = null;
                if (response.data.data && response.data.data.length > 0) {
                    foundService = response.data.data.find(
                        (s) => s.title.toLowerCase() === service.toLowerCase()
                    );
                }

                if (!foundService) {
                    setError('Service not found');
                } else {
                    setSelectedService(foundService);
                }
            } catch (err) {
                console.error("Failed to fetch service:", err);
                setError('Failed to load service. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchService();
    }, [service]);

    // Only show error after loading is complete
    if (!isLoading && (error || !selectedService)) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
                    <p className="text-gray-600">{error || 'Service not found'}</p>
                </div>
            </div>
        );
    }

    // Show nothing while loading (page will render with animations once data arrives)
    if (!selectedService) {
        return null;
    }

    return <Services service={selectedService} />;
};

export default ServicePage;
