import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
    
    const [currencyType, setCurrencyType] = useState('');

    return (
        <CurrencyContext.Provider value={{ currencyType, setCurrencyType }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) throw Error("useCurrency must be used within a CurrencyProvider");
    return context; // Adjusted to access provideCurrency
};

export default CurrencyProvider;

CurrencyProvider.propTypes = {
    children: PropTypes.node.isRequired,
};