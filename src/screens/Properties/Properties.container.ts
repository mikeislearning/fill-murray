import { connect } from 'react-redux';

import { listProperties } from '../../actions';

import Properties from './Properties';

const mapStateToProps = (state: any) => ({
  data: state.properties,
  loading: state.properties.loading,
  error: state.properties.error,
});

export default connect(
  mapStateToProps,
  { listProperties }
)(Properties);
