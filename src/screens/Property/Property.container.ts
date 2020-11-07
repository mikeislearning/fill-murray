import { connect } from 'react-redux';

import { getProperty } from '../../actions';

import Property from './Property';

const mapStateToProps = (state: any) => ({
  data: state.property.data,
  loading: state.property.loading,
  error: state.property.error,
});

export default connect(mapStateToProps, { getProperty })(Property);
