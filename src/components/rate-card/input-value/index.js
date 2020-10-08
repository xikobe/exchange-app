import React, { useEffect, useState } from 'react';
import { Input } from '@chakra-ui/core';
import { usePocketsContext } from '../../../contexts/pockets';
import { useExchangeContext } from '../../../contexts/exchange';

const InputValue = ({ trade }) => {
  const { getInputValue, setTradeValue, setInputValue } = usePocketsContext();
  const { activeRate, tradeRate } = useExchangeContext();

  const getPrefix = (isTrade) => (isTrade ? '+' : '-');

  const handleOnChange = (e) => {
    e.preventDefault();
    if (trade) {
      setTradeValue(e.target.value);
      setInputValue(e.target.value * tradeRate);
    } else {
      setTradeValue(e.target.value * activeRate);
      setInputValue(e.target.value);
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
