import { getCurrencyList, getCurrencyRates } from '../../api';

export const CURRENCY_LIST_STORAGE_KEY = 'selectedCurrencyList';

export const LOAD_CURRENCY_LIST = 'LOAD_CURRENCY_LIST';

export const loadCurrencyList = currencyList => dispatch => (
  getCurrencyList()
    .then(response => dispatch(
        {
          type: LOAD_CURRENCY_LIST,
          payload: response.data.symbols,
        }
      )
    ));

export const LOAD_CURRENCY_RATES = 'LOAD_CURRENCY_RATES';

export const loadCurrencyRates = (selectedCurrencies = []) => dispatch =>
  selectedCurrencies.length > 0
    ? getCurrencyRates(selectedCurrencies)
      .then(response => dispatch({
        type: LOAD_CURRENCY_RATES,
        payload: response.data.rates,
      }))
    : {};

export const ADD_TO_SELECTED_CURRENCIES = 'ADD_TO_SELECTED_CURRENCIES';

export const addToSelectedCurrencies = currency => (
  {
    type: ADD_TO_SELECTED_CURRENCIES,
    payload: currency,
  }
);

export const DELETE_FROM_SELECTED_CURRENCIES = 'DELETE_FROM_SELECTED_CURRENCIES';

export const deleteFromSelectedCurrencies = currency => (
  {
    type: DELETE_FROM_SELECTED_CURRENCIES,
    payload: currency,
  }
);
