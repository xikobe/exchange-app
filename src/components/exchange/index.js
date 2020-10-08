import React from 'react';
import { Wrapper } from './styles';
import RateCard from '../rate-card';
import RateValue from '../rate-value';
import ExchangeContext from '../../contexts/exchange';
import SwitchCurrency from '../switch-currency';

const Exchange = () => (
  <Wrapper>
    <ExchangeContext>
      <RateCard>Foo</RateCard>
      <RateValue />
      <SwitchCurrency />
      <RateCard trade>Bar</RateCard>
    </ExchangeContext>
  </Wrapper>
);

export default Exchange;
