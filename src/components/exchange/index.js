import React from 'react';
import { Wrapper } from './styles';
import RateCard from '../rate-card';
import ExchangeContext from '../../contexts/exchange';
import SwitchCurrency from '../switch-currency';
import SubmitExchange from './submit-exchange';

const Exchange = () => (
  <Wrapper>
    <ExchangeContext>
      <RateCard />
      <SwitchCurrency />
      <RateCard trade />
      <SubmitExchange />
    </ExchangeContext>
  </Wrapper>
);

export default Exchange;
