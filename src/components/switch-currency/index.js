import React from 'react';
import { Button, Icon } from '@chakra-ui/core';
import { useExchangeContext } from '../../contexts/exchange';
import RateValue from '../rate-value';
import { Wrapper } from './styles';

const SwitchCurrency = () => {
  const { handleSwitchCurrency, isLoadingRate } = useExchangeContext();

  return (
    <Wrapper>
      <Button variantColor="blue" variant="outline" loadingText="Fetching rate" isLoading={isLoadingRate} icon="repeat" onClick={handleSwitchCurrency}>
        <RateValue />
        <Icon color="teal" name="repeat" />
      </Button>
    </Wrapper>
  );
};

export default SwitchCurrency;
