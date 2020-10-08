import React from 'react';
import { useExchangeContext } from '../../contexts/exchange';

const RateValue = () => {
  const { activeRate, activeCurrency, tradeCurrency } = useExchangeContext();

  if (!activeRate) {
    return null;
  }

  return (<p>{`1${activeCurrency} = ${activeRate.toFixed(4)}${tradeCurrency}`}</p>);
};

export default RateValue;
