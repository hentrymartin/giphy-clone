import {
  ON_GIPHY_SEARCH_CHANGE,
  ON_GIPHY_SEARCH_RECEIVED,
  ON_GIPHY_SEARCH_STARTED,
} from './../actions/HomePageActions';

const defaultState = {
  searchKey: '',
  gifs: [],
  isLoading: false,
};
export default function HomeReducer(state = defaultState, action) {
  switch (action.type) {
    case ON_GIPHY_SEARCH_CHANGE:
      return {
        ...state,
        searchKey: action.searchKey,
      };
    case ON_GIPHY_SEARCH_RECEIVED:
      return {
        ...state,
        gifs: action.gifs,
        isLoading: false,
      };
    case ON_GIPHY_SEARCH_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
