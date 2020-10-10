import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/core';
import SelectCurrency from './select-currency';
import InputValue from './input-value';
import { useExchangeContext } from '../../contexts/exchange';
import { usePocketsContext } from '../../contexts/pockets';
import { Wrapper, InputWrapper, BalanceWrapper } from './styles';

const RateCard = ({ trade }) => {
  const { getCurrency } = useExchangeContext();
  const { getBalance } = usePocketsContext();
  const currencyType = getCurrency(trade);

  return (
    <Wrapper>
      <InputWrapper>
        <SelectCurrency trade={trade} currencyType={currencyType} />
        <InputValue trade={trade} />
      </InputWrapper>
      <BalanceWrapper>
        <Text as="i" fontSize="sm" color="blue.300">
          balance:
          {' '}
          {getBalance(currencyType) + currencyType}
        </Text>
      </BalanceWrapper>
    </Wrapper>
  );
};

RateCard.propTypes = {
  trade: PropTypes.bool,
};

export default RateCard;
