import React, { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
    const [currencyType, setCurrencyType] = useState('');

    const calculatePriceByCurrency = (price) => {
        if (currencyType === 'USD') {
            return price;
        } else if (currencyType === 'EUR') {
            return price * 0.85;
        } else if (currencyType === 'NIS') {
            return price * 3.5; 
        } else {
            return price; 
        }
    };

    const providerValue = useMemo(() => ({
        currencyType,
        setCurrencyType,
        calculatePriceByCurrency,
    }), [currencyType]);

    return (
        <CurrencyContext.Provider value={providerValue}>
            {children}
        </CurrencyContext.Provider>
    );
};


export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) throw Error("useCurrency must be used within a CurrencyProvider");
    return context; 
};

export default CurrencyProvider;

CurrencyProvider.propTypes = {
    children: PropTypes.node.isRequired,
};