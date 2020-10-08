import React from 'react';
import { useExchangeContext } from '../../contexts/exchange';

const RateValue = () => {
  const { rate, activeCurrency, tradeCurrency } = useExchangeContext();

  if (!rate) {
    return null;
  }

  return (<p>{`1${activeCurrency} = ${rate.toFixed(4)}${tradeCurrency}`}</p>);
};

export default RateValue;
