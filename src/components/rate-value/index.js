import React from 'react';
import { Text } from '@chakra-ui/core';
import { useExchangeContext } from '../../contexts/exchange';

const RateValue = () => {
  const { activeRate, activeCurrency, tradeCurrency } = useExchangeContext();

  if (!activeRate) {
    return null;
  }

  return (<Text marginRight="10px">{`1${activeCurrency} = ${activeRate.toFixed(4)}${tradeCurrency}`}</Text>);
};

export default RateValue;
