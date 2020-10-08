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

  return (
    <PocketsContext.Provider value={{
      pocket,
      getBalance,
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
