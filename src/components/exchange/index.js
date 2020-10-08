import React, { useState } from 'react';
import { Wrapper } from './styles';
import RateCard from '../rate-card';

const Exchange = () => {
  const [activeCurrency, setActiveCurrency] = useState('EUR');
  const [activeTradeCurrency, setActiveTradeCurrency] = useState('USD');

  return (
    <Wrapper>
      <RateCard currency={activeCurrency}>Foo</RateCard>
      <RateCard currency={activeTradeCurrency}>Bar</RateCard>
    </Wrapper>
  );
};

export default Exchange;
