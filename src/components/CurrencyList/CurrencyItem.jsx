import * as React from 'react';

import './index.css'

const CurrencyItem = ({ currency, rate, onDelete }) => (
  <div className="currency">
    <span className="currency-name">{currency}</span>
    <span className="currency-rate">{rate ? rate : 'Loading...'}</span>
    <button onClick={() => onDelete(currency)}>Remove</button>
  </div>
);

export default CurrencyItem;
