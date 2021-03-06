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

  const getBalance = (currency) => pocket[currency];
  const makeExchange = ({
    activeCurrency, tradeCurrency, inputValue, tradeValue,
  }) => {
    setPocket((prevPocket) => ({
      ...prevPocket,
      [activeCurrency]: Number(prevPocket[activeCurrency]) - Number(inputValue),
      [tradeCurrency]: Number(prevPocket[tradeCurrency]) + Number(tradeValue),
    }));
  };

  return (
    <PocketsContext.Provider value={{
      pocket,
      getBalance,
      makeExchange,
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
