import * as React from 'react';
import _ from 'lodash';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import './index.css';

const handleSelect = (value, selectedCurrencies, onCurrencyAdd) => {
  if (!_.includes(selectedCurrencies, value)) {
    onCurrencyAdd(value);
  } else {
    alert('Already selected')
  }
};

const CurrencySelector = ({ currencyList, selectedCurrencies, onCurrencyAdd }) => (
  <div className="currency-search">
    <Select
      options={_.map(currencyList, (value, name) => ({ name, value }))}
      simpleValue
      name="select-currency"
      searchable
      clearable
      labelKey="value"
      valueKey="name"
      onChange={value => handleSelect(value, selectedCurrencies, onCurrencyAdd)}
      disabled={currencyList.length === 0}
    />
  </div>
);

export default CurrencySelector;
