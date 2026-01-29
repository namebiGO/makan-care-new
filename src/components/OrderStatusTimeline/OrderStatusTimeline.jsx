import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const OrderStatusTimeline = ({ order }) => {
    const { t } = useTranslation();

    const statuses = ['Pending', 'Confirmed', 'In Progress', 'Completed'];
    const currentStatusIndex = statuses.indexOf(order.status);

    const getStatusIcon = (status, index) => {
        if (order.status === 'Cancelled') {
            return '❌';
        }

        if (index < currentStatusIndex) {
            return '✓';
        } else if (index === currentStatusIndex) {
            return '●';
        } else {
            return '○';
        }
    };

    const getStatusColor = (index) => {
        if (order.status === 'Cancelled') {
            return 'text-red-600';
        }

        if (index < currentStatusIndex) {
            return 'text-green-600';
        } else if (index === currentStatusIndex) {
            return 'text-blue-600';
        } else {
            return 'text-gray-400';
        }
    };

    const getLineColor = (index) => {
        if (order.status === 'Cancelled') {
            return 'bg-red-200';
        }

        if (index < currentStatusIndex) {
            return 'bg-green-600';
        } else {
            return 'bg-gray-300';
        }
    };

    // Get timestamp for each status from history
    const getStatusTimestamp = (status) => {
        const historyItem = order.statusHistory.find(item => item.status === status);
        if (historyItem) {
            return new Date(historyItem.timestamp).toLocaleString();
        }
        return null;
    };

    if (order.status === 'Cancelled') {
        return (
            <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {t('Order Status')}
                </h2>
                <div className="text-center py-8">
                    <div className="text-6xl mb-4">❌</div>
                    <h3 className="text-2xl font-bold text-red-600 mb-2">
                        {t('Order Cancelled')}
                    </h3>
                    <p className="text-gray-600">
                        {t('This order has been cancelled')}
                    </p>
                    {order.statusHistory.find(item => item.status === 'Cancelled')?.note && (
                        <p className="text-gray-500 mt-2">
                            {order.statusHistory.find(item => item.status === 'Cancelled').note}
                        </p>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {t('Order Status')}
            </h2>

            {/* Desktop Timeline */}
            <div className="hidden md:block">
                <div className="relative">
                    {/* Progress Line */}
                    <div className="absolute top-6 left-0 right-0 h-1 bg-gray-300">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{
                                width: `${(currentStatusIndex / (statuses.length - 1)) * 100}%`
                            }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className={`h-full ${order.status === 'Cancelled' ? 'bg-red-600' : 'bg-[#6b4f36]'
                                }`}
                        />
                    </div>

                    {/* Status Points */}
                    <div className="relative flex justify-between">
                        {statuses.map((status, index) => (
                            <motion.div
                                key={status}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center"
                            >
                                {/* Icon */}
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold ${index <= currentStatusIndex
                                        ? 'bg-green-100 border-4 border-green-600'
                                        : 'bg-gray-100 border-4 border-gray-300'
                                        } ${getStatusColor(index)}`}
                                >
                                    {getStatusIcon(status, index)}
                                </div>

                                {/* Status Label */}
                                <div className="mt-4 text-center">
                                    <p
                                        className={`font-semibold ${index <= currentStatusIndex
                                            ? 'text-gray-900'
                                            : 'text-gray-400'
                                            }`}
                                    >
                                        {t(status)}
                                    </p>
                                    {getStatusTimestamp(status) && (
                                        <p className="text-xs text-gray-500 mt-1">
                                            {getStatusTimestamp(status)}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden">
                <div className="space-y-4">
                    {statuses.map((status, index) => {
                        const timestamp = getStatusTimestamp(status);
                        const isCompleted = index < currentStatusIndex;
                        const isCurrent = index === currentStatusIndex;

                        return (
                            <motion.div
                                key={status}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start"
                            >
                                {/* Icon */}
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 ${isCompleted || isCurrent
                                        ? 'bg-green-100 border-2 border-green-600'
                                        : 'bg-gray-100 border-2 border-gray-300'
                                        } ${getStatusColor(index)}`}
                                >
                                    {getStatusIcon(status, index)}
                                </div>

                                {/* Content */}
                                <div className="ml-4 flex-1">
                                    <p
                                        className={`font-semibold ${isCompleted || isCurrent
                                            ? 'text-gray-900'
                                            : 'text-gray-400'
                                            }`}
                                    >
                                        {t(status)}
                                    </p>
                                    {timestamp && (
                                        <p className="text-sm text-gray-500 mt-1">
                                            {timestamp}
                                        </p>
                                    )}
                                </div>

                                {/* Line */}
                                {index < statuses.length - 1 && (
                                    <div
                                        className={`absolute left-5 mt-10 w-0.5 h-8 ${getLineColor(
                                            index
                                        )}`}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Current Status Message */}
            <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-[#6b4f36]">
                <p className="text-[#6b4f36] font-medium">
                    {order.status === 'Completed'
                        ? `🎉 ${t('Your order has been completed!')}`
                        : `📍 ${t('Current Status')}: ${t(order.status)}`}
                </p>
            </div>
        </div>
    );
};

export default OrderStatusTimeline;
