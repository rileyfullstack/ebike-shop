import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
    const [currencyType, setCurrencyType] = useState('');

    const provideCurrency = useMemo(() => ({currencyType, setCurrencyType}), [currencyType]);

    return (
        <CurrencyContext.Provider value={{provideCurrency}}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) throw Error("useCurrency must be used within a CurrencyProvider");
    return context;
};

CurrencyProvider.propTypes = {
    children: PropTypes.node.isRequired,
};