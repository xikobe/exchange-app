import React, { useEffect, useState } from 'react';
import { Input } from '@chakra-ui/core';
import { usePocketsContext } from '../../../contexts/pockets';
import { useExchangeContext } from '../../../contexts/exchange';

const InputValue = ({ trade }) => {
  const { getInputValue, setTradeValue, setInputValue } = usePocketsContext();
  const { activeRate, tradeRate } = useExchangeContext();

  const getPrefix = (isTrade) => (isTrade ? '+' : '-');

  useEffect(() => {
    setTradeValue(getInputValue() * activeRate);
  }, [activeRate]);

  // useEffect(() => {
  //   setTradeValue(getInputValue() * tradeRate);
  // }, [tradeRate]);

  const handleOnChange = (e) => {
    if (trade) {
      setTradeValue(parseFloat(e.target.value));
      setInputValue(parseFloat(e.target.value * tradeRate));
    } else {
      setTradeValue(parseFloat(e.target.value * activeRate));
      setInputValue(parseFloat(e.target.value));
    }
  };

  return (
    <>
      { !!getInputValue(trade) && <span>{ getPrefix(trade) }</span> }
      <Input type="number" onChange={handleOnChange} value={getInputValue(trade)} placeholder="0" size="md" />
    </>
  );
};

export default InputValue;
