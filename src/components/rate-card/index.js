import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/core';
import SelectCurrency from './select-currency';
import InputValue from './input-value';
import { useExchangeContext } from '../../contexts/exchange';
import { usePocketsContext } from '../../contexts/pockets';

const RateCard = ({ trade }) => {
  const { getCurrency } = useExchangeContext();
  const { getBalance } = usePocketsContext();
  const currencyType = getCurrency(trade);

  return (
    <>
      <SelectCurrency trade={trade} currencyType={currencyType} />
      <InputValue trade={trade} />
      <Text color="white">
        Balance:
        {' '}
        {getBalance(currencyType)}
      </Text>
    </>
  );
};

RateCard.propTypes = {
  trade: PropTypes.bool,
};

export default RateCard;
