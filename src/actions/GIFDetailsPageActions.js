export const ON_GET_GIF_DETAILS_STARTED = 'ON_GET_GIF_DETAILS_STARTED';
export const ON_RECEIVED_GIF_DETAILS = 'ON_RECEIVED_GIF_DETAILS';

export function onGetGIFDetailsStarted() {
  return {
    type: ON_GET_GIF_DETAILS_STARTED,
  };
}

export function onReceivedGIFDetails(gif) {
  return {
    type: ON_RECEIVED_GIF_DETAILS,
    gif,
  };
}

export function onGetGIFDetails(id) {
  return dispatch => {
    dispatch(onGetGIFDetailsStarted());
    const url = `https://api.giphy.com/v1/gifs/${id}?api_key=A9XY7wrVlzud7cFPrqOUAUw0dlOjHYhu`;
    fetch(url, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(response => {
        dispatch(onReceivedGIFDetails(response.data));
      });
  };
}
