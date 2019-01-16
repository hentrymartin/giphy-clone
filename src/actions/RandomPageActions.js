export const ON_RECEIVED_RANDOM_GIF = 'ON_RECEIVED_RANDOM_GIF';
export const ON_RANDOM_GIF_LOAD_STARTED = 'ON_RANDOM_GIF_LOAD_STARTED';

export function onReceivedRandomGIF(gif) {
  return {
    type: ON_RECEIVED_RANDOM_GIF,
    gif,
  };
}

export function onRandomGIFLoadStarted() {
  return {
    type: ON_RANDOM_GIF_LOAD_STARTED,
  };
}

export function onRandomGIFLoad() {
  return dispatch => {
    dispatch(onRandomGIFLoadStarted());
    const url = `https://api.giphy.com/v1/gifs/random?api_key=A9XY7wrVlzud7cFPrqOUAUw0dlOjHYhu&limit=25&offset=0&rating=G&lang=en`;
    fetch(url, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(response => {
        dispatch(onReceivedRandomGIF(response.data));
      });
  };
}
