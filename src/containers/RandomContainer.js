import { connect } from 'react-redux';
import RandomPage from './../components/Pages/RandomPage';
import { onRandomGIFLoad } from './../actions/RandomPageActions';

const mapStateToProps = store => {
  return {
    gif: store.RandomReducer.gif,
    isLoading: store.RandomReducer.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRandomGIFLoad: () => {
      dispatch(onRandomGIFLoad());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RandomPage);
