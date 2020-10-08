import React, {
  createContext, useContext, useState,
} from 'react';
import PropTypes from 'prop-types';
import { useRates } from '../../queries/rates';

const ExchangeContext = createContext();

export const useExchangeContext = () => useContext(ExchangeContext);

const ExchangeProvider = ({ children }) => {
  const [availableCurrencies, setAvailableCurrencies] = useState(['USD', 'EUR', 'GBP']);
  const [activeCurrency, setActiveCurrency] = useState('USD');
  const [tradeCurrency, setTradeCurrency] = useState('EUR');
  const { data } = useRates({ base: activeCurrency, trade: tradeCurrency });

  const getCurrency = (isTrade) => (isTrade ? tradeCurrency : activeCurrency);

  const handleSwitchCurrency = () => {
    const tempActive = activeCurrency;
    const tempTrade = tradeCurrency;
    setActiveCurrency(tempTrade);
    setTradeCurrency(tempActive);
  }

  const handleChangeCurrency = (isTrade, value) => {
    if(isTrade) {
      return setTradeCurrency(value);
    }

    return setActiveCurrency(value);
  }

  return (
    <ExchangeContext.Provider value={{
      availableCurrencies,
      activeCurrency,
      tradeCurrency,
      getCurrency,
      handleSwitchCurrency,
      rate: data?.rates[tradeCurrency],
      handleChangeCurrency,
    }}
    >
      { children}
    </ExchangeContext.Provider>
  );
};

ExchangeProvider.propTypes = {
  children: PropTypes.node,
};

export default ExchangeProvider;
