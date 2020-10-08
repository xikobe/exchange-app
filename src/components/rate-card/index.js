import React from 'react';
import PropTypes from 'prop-types';

const RateCard = ({ currency }) => {
  console.log(currency);

  return <p>{currency}</p>;
};

RateCard.propTypes = {
  currency: PropTypes.string,
};

export default RateCard;
