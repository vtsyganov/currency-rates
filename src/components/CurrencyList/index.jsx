import * as React from 'react';

import CurrencyItem from './CurrencyItem';

import './index.css';

const CurrencyList = ({ rates, selectedCurrencies, onDelete }) => (
  <div className="rates-list">
    {selectedCurrencies.map(currency => (
      <CurrencyItem
        key={currency}
        currency={currency}
        rate={rates[currency]}
        onDelete={onDelete}
      />
    ))}
  </div>
);

export default CurrencyList;
