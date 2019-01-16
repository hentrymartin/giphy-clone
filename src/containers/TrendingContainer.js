import { connect } from 'react-redux';
import TrendingPage from './../components/Pages/TrendingPage';
import { onTrendingGifsLoad, onSearchTrendingGIFS } from './../actions/TrendingPageActions';

const mapStateToProps = store => {
  return {
    gifs: store.TrendingReducer.gifs,
    isLoading: store.TrendingReducer.isLoading,
    searchKey: store.TrendingReducer.searchKey,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTrendingGifsLoad: () => {
      dispatch(onTrendingGifsLoad());
    },
    onSearchTrendingGIFS: searchKey => {
      dispatch(onSearchTrendingGIFS(searchKey));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrendingPage);
