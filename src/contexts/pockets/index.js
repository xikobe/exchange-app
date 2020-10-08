import React, {
  createContext, useContext, useState,
} from 'react';
import PropTypes from 'prop-types';

const PocketsContext = createContext();

export const usePocketsContext = () => useContext(PocketsContext);

const PocketsProvider = ({ children }) => {
  const [pocket, setPocket] = useState({
    USD: 100,
    EUR: 90,
    GBP: 70,
  });
  const [inputValue, setInputValue] = useState(0);
  const [tradeValue, setTradeValue] = useState(0);

  const getBalance = (currency) => pocket[currency];

  const getInputValue = (isTrade) => (isTrade ? tradeValue : inputValue);

  return (
    <PocketsContext.Provider value={{
      pocket,
      getBalance,
      inputValue,
      tradeValue,
      setInputValue,
      setTradeValue,
      getInputValue,
    }}
    >
      {children}
    </PocketsContext.Provider>
  );
};

PocketsProvider.propTypes = {
  children: PropTypes.node,
};

export default PocketsProvider;
