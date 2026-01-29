import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { fadeIn } from '../../utils/animations';

const OrderDetailsCard = ({ order }) => {
    const { t } = useTranslation();

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getPaymentStatusColor = (status) => {
        switch (status) {
            case 'Paid':
                return 'bg-green-100 text-green-800';
            case 'Pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'Refunded':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getOrderStatusColor = (status) => {
        switch (status) {
            case 'Completed':
                return 'bg-green-100 text-green-800';
            case 'In Progress':
                return 'bg-blue-100 text-blue-800';
            case 'Confirmed':
                return 'bg-purple-100 text-purple-800';
            case 'Pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'Cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <motion.div
            variants={fadeIn}
            className="bg-white rounded-lg shadow-md overflow-hidden"
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#6b4f36] to-[#543c29] text-white p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">
                            {t('Order Details')}
                        </h2>
                        <p className="text-blue-100">
                            {t('Order ID')}: <span className="font-mono font-bold">{order.orderId}</span>
                        </p>
                    </div>
                    <div className="text-right">
                        <span
                            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getOrderStatusColor(
                                order.status
                            )}`}
                        >
                            {t(order.status)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
                {/* Customer Information */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="mr-2">👤</span>
                        {t('Customer Information')}
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                            <span className="text-gray-600">{t('Name')}:</span>
                            <span className="font-medium text-gray-900">
                                {order.customerInfo.name}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">{t('Email')}:</span>
                            <span className="font-medium text-gray-900">
                                {order.customerInfo.email}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">{t('Phone')}:</span>
                            <span className="font-medium text-gray-900">
                                {order.customerInfo.phone}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Service Information */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="mr-2">🛠️</span>
                        {t('Service Information')}
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                            <span className="text-gray-600">{t('Service')}:</span>
                            <span className="font-medium text-gray-900">
                                {order.serviceDetails.serviceName}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">{t('Category')}:</span>
                            <span className="font-medium text-gray-900">
                                {order.serviceDetails.subcategoryName}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">{t('Duration')}:</span>
                            <span className="font-medium text-gray-900">
                                {order.serviceDetails.duration}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Scheduling Information */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="mr-2">📅</span>
                        {t('Scheduling')}
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                            <span className="text-gray-600">{t('Scheduled Date')}:</span>
                            <span className="font-medium text-gray-900">
                                {formatDate(order.scheduledDate)}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">{t('Order Placed')}:</span>
                            <span className="font-medium text-gray-900">
                                {formatDate(order.createdAt)}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Address */}
                {order.address && (
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <span className="mr-2">📍</span>
                            {t('Service Address')}
                        </h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-gray-900">
                                {order.address.fullAddress ||
                                    `${order.address.street}, ${order.address.city}, ${order.address.state} ${order.address.zipCode}`}
                            </p>
                        </div>
                    </div>
                )}

                {/* Payment Information */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="mr-2">💳</span>
                        {t('Payment Information')}
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">{t('Payment Status')}:</span>
                            <span
                                className={`px-3 py-1 rounded-full text-sm font-semibold ${getPaymentStatusColor(
                                    order.paymentStatus
                                )}`}
                            >
                                {t(order.paymentStatus)}
                            </span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                            <span className="text-lg font-semibold text-gray-900">
                                {t('Total Amount')}:
                            </span>
                            <span className="text-2xl font-bold text-[#6b4f36]">
                                AED {order.totalAmount.toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Notes */}
                {order.notes && (
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <span className="mr-2">📝</span>
                            {t('Notes')}
                        </h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-gray-700">{order.notes}</p>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default OrderDetailsCard;
