import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CurrencyContainer from './CurrencyContainer'
import * as actions from '../store/actions';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...actions,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyContainer);
