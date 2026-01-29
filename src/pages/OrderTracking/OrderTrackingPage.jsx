import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import api from '../../services/api';
import OrderStatusTimeline from '../../components/OrderStatusTimeline/OrderStatusTimeline';
import OrderDetailsCard from '../../components/OrderDetailsCard/OrderDetailsCard';
import { pageTransition, fadeIn } from '../../utils/animations';

const OrderTrackingPage = () => {
    const { t } = useTranslation();
    const [orderId, setOrderId] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [verificationMethod, setVerificationMethod] = useState('email'); // 'email' or 'phone'

    const handleTrackOrder = async (e) => {
        e.preventDefault();
        setError('');
        setOrder(null);
        setLoading(true);

        try {
            const payload = {
                orderId: orderId.trim(),
            };

            if (verificationMethod === 'email') {
                payload.email = email.trim();
            } else {
                payload.phone = phone.trim();
            }

            const response = await api.post('/orders/track', payload);

            if (response.data.success) {
                setOrder(response.data.data);
            } else {
                setError(response.data.message || 'Order not found');
            }
        } catch (err) {
            console.error('Error tracking order:', err);
            setError(
                err.response?.data?.message ||
                'Failed to track order. Please check your order ID and verification details.'
            );
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setOrderId('');
        setEmail('');
        setPhone('');
        setOrder(null);
        setError('');
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            className="min-h-screen bg-gray-50 py-12"
        >
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <motion.div variants={fadeIn} className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {t('Track Your Order')}
                    </h1>
                    <p className="text-gray-600">
                        {t('Enter your order ID and verification details to track your service booking')}
                    </p>
                </motion.div>

                {/* Tracking Form */}
                {!order && (
                    <motion.div
                        variants={fadeIn}
                        className="bg-white rounded-lg shadow-md p-8 mb-8"
                    >
                        <form onSubmit={handleTrackOrder}>
                            {/* Order ID Input */}
                            <div className="mb-6">
                                <label
                                    htmlFor="orderId"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    {t('Order ID')} *
                                </label>
                                <input
                                    type="text"
                                    id="orderId"
                                    value={orderId}
                                    onChange={(e) => setOrderId(e.target.value)}
                                    placeholder="e.g., MK-202401-123456"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b4f36] focus:border-transparent outline-none transition"
                                    required
                                />
                            </div>

                            {/* Verification Method Toggle */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {t('Verify with')}
                                </label>
                                <div className="flex gap-4 mb-4">
                                    <button
                                        type="button"
                                        onClick={() => setVerificationMethod('email')}
                                        className={`flex-1 py-2 px-4 rounded-lg font-medium transition ${verificationMethod === 'email'
                                            ? 'bg-[#6b4f36] text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {t('Email')}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setVerificationMethod('phone')}
                                        className={`flex-1 py-2 px-4 rounded-lg font-medium transition ${verificationMethod === 'phone'
                                            ? 'bg-[#6b4f36] text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {t('Phone')}
                                    </button>
                                </div>

                                {/* Email Input */}
                                {verificationMethod === 'email' && (
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={t('Enter your email address')}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b4f36] focus:border-transparent outline-none transition"
                                        required
                                    />
                                )}

                                {/* Phone Input */}
                                {verificationMethod === 'phone' && (
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder={t('Enter your phone number')}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b4f36] focus:border-transparent outline-none transition"
                                        required
                                    />
                                )}
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <p className="text-red-600 text-sm">{error}</p>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#6b4f36] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#543c29] transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {loading ? t('Tracking...') : t('Track Order')}
                            </button>
                        </form>
                    </motion.div>
                )}

                {/* Order Details */}
                {order && (
                    <motion.div variants={fadeIn}>
                        {/* Success Message */}
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                            <p className="text-green-700 font-medium">
                                ✓ {t('Order found successfully!')}
                            </p>
                        </div>

                        {/* Order Details Card */}
                        <OrderDetailsCard order={order} />

                        {/* Status Timeline */}
                        <div className="mt-8">
                            <OrderStatusTimeline order={order} />
                        </div>

                        {/* Track Another Order Button */}
                        <div className="mt-8 text-center">
                            <button
                                onClick={handleReset}
                                className="bg-gray-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-gray-700 transition"
                            >
                                {t('Track Another Order')}
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* Help Section */}
                <motion.div
                    variants={fadeIn}
                    className="mt-12 bg-amber-50 rounded-lg p-6 text-center"
                >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t('Need Help?')}
                    </h3>
                    <p className="text-gray-600 mb-4">
                        {t('If you have any questions about your order, please contact our support team.')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:support@makancare.com"
                            className="text-[#6b4f36] hover:text-[#543c29] font-medium"
                        >
                            📧 support@makancare.com
                        </a>
                        <a
                            href="tel:+1234567890"
                            className="text-[#6b4f36] hover:text-[#543c29] font-medium"
                        >
                            📞 +123 456 7890
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default OrderTrackingPage;
