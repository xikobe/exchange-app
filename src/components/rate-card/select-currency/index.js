import React from 'react';
import PropTypes from 'prop-types';
import { Select } from '@chakra-ui/core';
import { useExchangeContext } from '../../../contexts/exchange';

const SelectCurrency = ({ currencyType, trade }) => {
  const { availableCurrencies, handleChangeCurrency } = useExchangeContext();

  const handleOnChange = (e) => {
    handleChangeCurrency(trade, e.target.value);
  };

  return (
    <Select padding="0 0 0 10px" width="100px" borderColor="transparent" backgroundColor="transparent" color="white" value={currencyType} onChange={handleOnChange} placeholder="Select option">
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
  );
};

SelectCurrency.propTypes = {
  currencyType: PropTypes.string,
  trade: PropTypes.bool,
};

export default SelectCurrency;
