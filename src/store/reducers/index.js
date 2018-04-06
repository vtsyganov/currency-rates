import _ from 'lodash';

import {
  LOAD_CURRENCY_LIST,
  ADD_TO_SELECTED_CURRENCIES,
  LOAD_CURRENCY_RATES,
  DELETE_FROM_SELECTED_CURRENCIES,
  CURRENCY_LIST_STORAGE_KEY,
} from '../actions';

const initialState = {
  currencyList: {},
  selectedCurrencies: JSON.parse(localStorage.getItem(CURRENCY_LIST_STORAGE_KEY)) || [],
  rates: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENCY_LIST:
      return { ...state, currencyList: action.payload };

    case ADD_TO_SELECTED_CURRENCIES:
      const selectedCurrencies = [...state.selectedCurrencies, action.payload];

      localStorage.setItem(CURRENCY_LIST_STORAGE_KEY, JSON.stringify(selectedCurrencies));
      return { ...state, selectedCurrencies };

    case DELETE_FROM_SELECTED_CURRENCIES:
      return { ...state, selectedCurrencies: _.without(state.selectedCurrencies, action.payload) }

    case LOAD_CURRENCY_RATES:
      return { ...state, rates: action.payload };

    default:
      return state;
  }
};
