import React, {
  createContext, useContext, useState,
} from 'react';
import PropTypes from 'prop-types';
import { useRates } from '../../queries/rates';
import { usePocketsContext } from '../pockets';

const ExchangeContext = createContext();

export const useExchangeContext = () => useContext(ExchangeContext);

const ExchangeProvider = ({ children }) => {
  const [availableCurrencies] = useState(['USD', 'EUR', 'GBP']);
  const [activeCurrency, setActiveCurrency] = useState('USD');
  const [tradeCurrency, setTradeCurrency] = useState('EUR');
  const [exchangeError, setExchangeError] = useState(null);
  const { getBalance } = usePocketsContext();
  const { data: activeRate, isLoading: isLoadingActiveRate } = useRates({ base: activeCurrency });
  const { data: tradeRate, isLoading: isLoadingTradeRate } = useRates({ base: tradeCurrency });

  const getCurrency = (isTrade) => (isTrade ? tradeCurrency : activeCurrency);

  const getCurrencyOptions = (isTrade) => availableCurrencies.filter((currency) => (
    !isTrade ? currency !== tradeCurrency : currency !== activeCurrency));

  const handleSwitchCurrency = () => {
    const tempActive = activeCurrency;
    const tempTrade = tradeCurrency;
    setActiveCurrency(tempTrade);
    setTradeCurrency(tempActive);
  };

  const handleChangeCurrency = (isTrade, value) => {
    if (isTrade) {
      return setTradeCurrency(value);
    }

    return setActiveCurrency(value);
  };

  const validateExchange = (value) => {
    const maxValue = getBalance(activeCurrency);

    if (Number(value) > Number(maxValue)) {
      return setExchangeError('Not enough balance');
    }

    return setExchangeError(null);
  };

  return (
    <ExchangeContext.Provider value={{
      availableCurrencies,
      activeCurrency,
      tradeCurrency,
      getCurrency,
      handleSwitchCurrency,
      getCurrencyOptions,
      activeRate: !isLoadingActiveRate && (activeRate.rates[tradeCurrency] || 1),
      tradeRate: !isLoadingTradeRate && (tradeRate.rates[activeCurrency] || 1),
      handleChangeCurrency,
      exchangeError,
      setExchangeError,
      validateExchange,
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
