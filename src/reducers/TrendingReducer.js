import {
  ON_RECEIVED_TRENDING_GIFS,
  ON_TRENDING_GIFS_LOAD_STARTED,
  ON_SEARCH_TRENDING_GIFS,
} from './../actions/TrendingPageActions';

const defaultState = {
  searchKey: '',
  gifs: [],
  isLoading: false,
};

export default function TrendingReducer(state = defaultState, action) {
  switch (action.type) {
    case ON_RECEIVED_TRENDING_GIFS:
      return {
        ...state,
        gifs: action.gifs,
        gifsCopy: action.gifs,
        isLoading: false,
      };
    case ON_TRENDING_GIFS_LOAD_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case ON_SEARCH_TRENDING_GIFS:
      return {
        ...state,
        searchKey: action.searchKey,
        gifs: state.gifsCopy.filter(gif => {
          return gif.title && gif.title.indexOf(action.searchKey) > -1;
        }),
      };
    default:
      return state;
  }
}
