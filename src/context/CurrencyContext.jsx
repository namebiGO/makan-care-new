import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error('useCurrency must be used within CurrencyProvider');
    }
    return context;
};

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState('AED');

    const toggleCurrency = (newCurrency) => {
        setCurrency(newCurrency);
    };

    const getCurrencySymbol = () => {
        return currency === 'AED' ? 'AED' : '$';
    };

    const convertPrice = (aedPrice) => {
        // 1 AED = 0.27 USD (approximate conversion rate)
        if (currency === 'USD') {
            return (aedPrice * 0.27).toFixed(2);
        }
        return aedPrice.toFixed(2);
    };

    return (
        <CurrencyContext.Provider value={{ currency, toggleCurrency, getCurrencySymbol, convertPrice }}>
            {children}
        </CurrencyContext.Provider>
    );
};
