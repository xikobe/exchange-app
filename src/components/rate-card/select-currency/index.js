import React from 'react';
import { Select } from '@chakra-ui/core';
import { useExchangeContext } from '../../../contexts/exchange';

const SelectCurrency = ({ currencyType, trade }) => {
  const { availableCurrencies, handleChangeCurrency } = useExchangeContext();

  const handleOnChange = (e) => {
    handleChangeCurrency(trade, e.target.value);
  };

  return (
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
  );
};

export default SelectCurrency;
