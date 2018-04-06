import * as React from 'react';

import CurrencySelector from './CurrencySearch';
import CurrencyList from './CurrencyList';

import './CurrentContainer.css';

class CurrencyContainer extends React.Component {
  state = {
    updateTimerId: null,
  };

  updateRates = selectedCurrencies => this.props.loadCurrencyRates(selectedCurrencies)

  toggleUpdateTimer = () => {
    const { updateTimerId } = this.state;

    if (updateTimerId) {
      clearInterval(updateTimerId);
      this.setState({ updateTimerId: null });
    } else {
      this.setState({ updateTimerId: setInterval(this.updateRates, 5000) })
    }
  };

  componentDidMount() {
    const { loadCurrencyList, selectedCurrencies } = this.props;

    loadCurrencyList();
    if (selectedCurrencies.length > 0) this.updateRates(selectedCurrencies);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.selectedCurrencies.length > this.props.selectedCurrencies.length) {
      this.updateRates(newProps.selectedCurrencies);
    }
  }

  render() {
    const {
      currencyList,
      selectedCurrencies,
      addToSelectedCurrencies,
      deleteFromSelectedCurrencies,
      loadCurrencyRates,
      rates,
    } = this.props;

    return (
      <div className="container">
        <div className="search-bar">
          <CurrencySelector
            currencyList={currencyList}
            selectedCurrencies={selectedCurrencies}
            onCurrencyAdd={addToSelectedCurrencies}
          />
          <label className="update-rates-checkbox">
            <input
              type="checkbox"
              checked={this.state.updateTimerId !== null}
              onClick={this.toggleUpdateTimer}
            />
            <span>Update rates</span>
          </label>
        </div>
        <CurrencyList
          currencyList={currencyList}
          selectedCurrencies={selectedCurrencies}
          loadCurrencyRates={loadCurrencyRates}
          rates={rates}
          onDelete={deleteFromSelectedCurrencies}
        />
      </div>
    );
  }
};

export default CurrencyContainer;
