import { connect } from 'react-redux';
import HomePage from './../components/Pages/HomePage';
import { onGiphySearchChange, onGiphySearch } from './../actions/HomePageActions';

let timerID = null;

const mapStateToProps = store => {
  return {
    searchKey: store.HomeReducer.searchKey,
    gifs: store.HomeReducer.gifs,
    isLoading: store.HomeReducer.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGiphySearchChange: searchKey => {
      dispatch(onGiphySearchChange(searchKey));

      // Debounce logic for hitting the server
      if (timerID) window.clearTimeout(timerID);
      timerID = setTimeout(() => {
        dispatch(onGiphySearch(searchKey));
        timerID = null;
      }, 300);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
