import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Text } from '@chakra-ui/core';
import { useExchangeContext } from '../../../contexts/exchange';
import { Wrapper, InputWrapper } from './styles';
import { validateField } from './utils';

const InputValue = ({ trade }) => {
  const { validateExchange, handleChangeValues, getInputValue } = useExchangeContext();
  const [error, setError] = useState(null);
  const getPrefix = (isTrade) => (isTrade ? '+' : '-');

  useEffect(() => {
    // we only want to validate the active pocket input for remaining balance
    if (!trade) {
      validateExchange(getInputValue());
    }
  }, [getInputValue, validateExchange, trade]);

  const handleOnChange = (e) => {
    validateField(e.target.value, setError);
    handleChangeValues(e.target.value, trade);
  };

  return (
    <Wrapper>
      <InputWrapper isInvalid={!!error}>
        <Text color="white">{ getPrefix(trade) }</Text>
        <Input textAlign="right" color="white" variant="unstyled" type="number" pattern="^\d*(\.\d{0,2})?$" onChange={handleOnChange} value={getInputValue(trade)} placeholder="0" size="md" />
      </InputWrapper>
    </Wrapper>
  );
};

InputValue.propTypes = {
  trade: PropTypes.bool,
};

export default InputValue;
