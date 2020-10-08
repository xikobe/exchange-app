import React from 'react';
import PropTypes from 'prop-types';
import { Select } from '@chakra-ui/core';
import { useExchangeContext } from '../../contexts/exchange';
import { usePocketsContext } from '../../contexts/pockets';

const RateCard = ({ trade }) => {
  const { getCurrency, availableCurrencies, handleChangeCurrency } = useExchangeContext();
  const { getBalance } = usePocketsContext();
  const currencyType = getCurrency(trade);

  const handleOnChange = (e) => {
    handleChangeCurrency(trade, e.target.value);
  };

  return (
    <>
      <Select value={currencyType} onChange={handleOnChange} placeholder="Select option">
        {
          availableCurrencies.map((currency) => (
            <option
              key={currency}
              value={currency}
            >
              {currency}

            </option>
          ))
        }
      </Select>
      <p>
        Balance:
        {' '}
        {getBalance(currencyType)}
      </p>
    </>
  );
};

RateCard.propTypes = {
  trade: PropTypes.bool,
};

export default RateCard;
