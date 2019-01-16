import { connect } from 'react-redux';
import GIFDetailsPage from './../components/Pages/GIFDetailsPage';
import { onGetGIFDetails } from './../actions/GIFDetailsPageActions';

const mapStateToProps = store => {
  return {
    gif: store.GIFDetailsReducer.gif,
    isLoading: store.GIFDetailsReducer.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetGIFDetails: gifID => {
      dispatch(onGetGIFDetails(gifID));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GIFDetailsPage);
