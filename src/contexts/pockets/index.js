import React, {
  createContext, useContext, useState, useCallback,
} from 'react';
import PropTypes from 'prop-types';

const PocketsContext = createContext();

export const usePocketsContext = () => useContext(PocketsContext);

const PocketsProvider = ({ children }) => {
  const [usdPocket, setUsdPocket] = useState(100);
  const [eurPocket, setEurPocket] = useState(100);
  const [gbPocket, setGbPocket] = useState(100);

  return (
    <PocketsContext.Provider value={{
      usdPocket,
      eurPocket,
      gbPocket,
    }}
    >
      { children}
    </PocketsContext.Provider>
  );
};

PocketsProvider.propTypes = {
  children: PropTypes.node,
};

export default PocketsProvider;
