import React from 'react';
import { useExchangeContext } from '../../contexts/exchange';

const SwitchCurrency = () => {
  const { handleSwitchCurrency } = useExchangeContext();

  return <button onClick={handleSwitchCurrency}>Switch</button>;
};

export default SwitchCurrency;
