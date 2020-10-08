import React from 'react';
import { Text } from '@chakra-ui/core';
import { Wrapper } from './styles';

const Header = () => (
  <Wrapper>
    <Text fontSize="5xl" color="white">
      Exchange
      {' '}
      <span aria-label="money" role="img">💰</span>
    </Text>
  </Wrapper>
);

export default Header;
