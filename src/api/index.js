import axios from 'axios';

const API_PATH = 'http://data.fixer.io/api';
const ACCESS_KEY = '2a884111a90a9c448a649cf054e92114';

const requestParams = (params = {}) => ({
  params: {
    'access_key': ACCESS_KEY,
    ...params,
  },
});

export const getCurrencyList = () =>
  axios.get(`${API_PATH}/symbols`, requestParams());

export const getCurrencyRates = currencyList =>
  axios.get(
    `${API_PATH}/latest`,
    requestParams({
      symbols: currencyList.join(','),
    }),
  );
