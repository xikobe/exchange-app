import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from '@chakra-ui/core';
import { usePocketsContext } from '../../../contexts/pockets';
import { useExchangeContext } from '../../../contexts/exchange';

const InputValue = ({ trade }) => {
  const {
    getInputValue, setTradeValue, setInputValue,
  } = usePocketsContext();
  const {
    activeRate, tradeRate, exchangeError, validateExchange,
  } = useExchangeContext();
  const getPrefix = (isTrade) => (isTrade ? '+' : '-');

  useEffect(() => {
    setTradeValue(getInputValue() * activeRate);
  }, [activeRate]);

  useEffect(() => {
    if (!trade) {
      validateExchange(getInputValue(trade));
    }
  }, [getInputValue(trade)]);

  const handleOnChange = (e) => {
    const tempValue = e.target.value;
    const value = (tempValue.indexOf('.') >= 0) ? (tempValue.substr(0, tempValue.indexOf('.')) + tempValue.substr(tempValue.indexOf('.'), 3)) : tempValue;

    if (trade) {
      setTradeValue(value);
      setInputValue((value * tradeRate).toFixed(2));
    } else {
      setTradeValue((value * activeRate).toFixed(2));
      setInputValue(value);
    }
  };

  return (
    <>
      <span>{ getPrefix(trade) }</span>
      <Input type="number" pattern="^\d*(\.\d{0,2})?$" onChange={handleOnChange} value={getInputValue(trade)} placeholder="0" size="md" />
      { !!exchangeError && !trade && <p>{exchangeError}</p> }
    </>
  );
};

InputValue.propTypes = {
  trade: PropTypes.bool,
};

export default InputValue;
