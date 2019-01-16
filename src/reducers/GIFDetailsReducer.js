import { ON_RECEIVED_GIF_DETAILS, ON_GET_GIF_DETAILS_STARTED } from './../actions/GIFDetailsPageActions';

const defaultState = {
  gif: {},
  isLoading: false,
};

export default function GIFDetailsReducer(state = defaultState, action) {
  switch (action.type) {
    case ON_RECEIVED_GIF_DETAILS:
      return {
        ...state,
        gif: action.gif,
        isLoading: false,
      };
    case ON_GET_GIF_DETAILS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
