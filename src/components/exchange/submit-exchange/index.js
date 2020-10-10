import React from 'react';
import { Button, Text } from '@chakra-ui/core';
import { usePocketsContext } from '../../../contexts/pockets';
import { useExchangeContext } from '../../../contexts/exchange';
import { Wrapper } from './styles';

const SubmitExchange = () => {
  const { makeExchange } = usePocketsContext();
  const { activeCurrency, tradeCurrency, exchangeError } = useExchangeContext();

  const handleOnClick = () => {
    makeExchange({ activeCurrency, tradeCurrency });
  };

  return (
    <Wrapper>
      <Button variantColor="pink" marginBottom="20px" disabled={activeCurrency === tradeCurrency || !!exchangeError} onClick={handleOnClick}>Exchange</Button>
      { exchangeError && <Text bg="red.500" padding="10px" color="white">{exchangeError}</Text> }
    </Wrapper>
  );
};

export default SubmitExchange;
