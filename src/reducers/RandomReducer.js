import { ON_RECEIVED_RANDOM_GIF, ON_RANDOM_GIF_LOAD_STARTED } from './../actions/RandomPageActions';

const defaultState = {
  gif: {},
  isLoading: false,
};

export default function RandomReducer(state = defaultState, action) {
  switch (action.type) {
    case ON_RECEIVED_RANDOM_GIF:
      return {
        ...state,
        gif: action.gif,
        isLoading: false,
      };
    case ON_RANDOM_GIF_LOAD_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
