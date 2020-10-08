import React from 'react';
import { Button } from '@chakra-ui/core';
import { usePocketsContext } from '../../../contexts/pockets';
import { useExchangeContext } from '../../../contexts/exchange';

const SubmitExchange = () => {
  const { makeExchange } = usePocketsContext();
  const { activeCurrency, tradeCurrency } = useExchangeContext();

  const handleOnClick = () => {
    makeExchange({ activeCurrency, tradeCurrency });
  };

  return (
    <Button disabled={activeCurrency === tradeCurrency} onClick={handleOnClick}>Exchange</Button>
  );
};

export default SubmitExchange;
