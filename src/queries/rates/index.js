import axios from 'axios';
import { useQuery } from 'react-query';

export const getRates = async (_, base) => {
  const { data } = await axios.get(`https://api.exchangeratesapi.io/latest?base=${base}`);

  return data;
};

export const useRates = ({ base }) => useQuery(
  ['rates', base],
  getRates,
  {
    refetchInterval: 500000,
  },
);
