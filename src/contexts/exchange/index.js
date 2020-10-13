import React, {
  createContext, useContext, useState, useEffect, useCallback,
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
  const [inputValue, setInputValue] = useState(0);
  const [tradeValue, setTradeValue] = useState(0);
  const {
    getBalance,
  } = usePocketsContext();

  const { data: activeRateData, isLoading: isLoadingActiveRate } = useRates({ base: activeCurrency });
  const { data: tradeRateData, isLoading: isLoadingTradeRate } = useRates({ base: tradeCurrency });

  // Returns correct value for input field
  const getInputValue = useCallback((isTrade) => (isTrade ? tradeValue : inputValue), [tradeValue, inputValue]);

  // Returns current active rate or 1 if the active and trade rates are the same
  const getActiveRate = useCallback(
    () => !isLoadingActiveRate && (activeRateData.rates[tradeCurrency] || 1),
    [isLoadingActiveRate, activeRateData, tradeCurrency],
  );

  // Returns current trade rate for converting back
  const getTradeRate = () => !isLoadingTradeRate && (tradeRateData.rates[activeCurrency] || 1);

  // Returns currency
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

  const handleChangeValues = (value, isTrade) => {
    const newValue = (value.indexOf('.') >= 0) ? (value.substr(0, value.indexOf('.')) + value.substr(value.indexOf('.'), 3)) : value;

    if (isTrade) {
      setTradeValue(newValue);
      setInputValue((newValue * getTradeRate).toFixed(2));
    } else {
      setTradeValue((newValue * getActiveRate()).toFixed(2));
      setInputValue(newValue);
    }
  };

  useEffect(() => {
    setTradeValue((getInputValue() * getActiveRate()).toFixed(2));
  }, [getActiveRate, getInputValue]);

  return (
    <ExchangeContext.Provider value={{
      availableCurrencies,
      activeCurrency,
      tradeCurrency,
      getCurrency,
      handleSwitchCurrency,
      getCurrencyOptions,
      activeRate: getActiveRate(),
      tradeRate: getTradeRate(),
      isLoadingRate: isLoadingActiveRate || isLoadingTradeRate,
      handleChangeCurrency,
      exchangeError,
      setExchangeError,
      validateExchange,
      handleChangeValues,
      getInputValue,
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
