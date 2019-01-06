export const ON_GIPHY_SEARCH_CHANGE = 'ON_GIPHY_SEARCH_CHANGE';
export const ON_GIPHY_SEARCH_RECEIVED = 'ON_GIPHY_SEARCH_RECEIVED';
export const ON_GIPHY_SEARCH_STARTED = 'ON_GIPHY_SEARCH_STARTED';

export function onGiphySearchChange(searchKey) {
  return {
    type: ON_GIPHY_SEARCH_CHANGE,
    searchKey,
  };
}

export function onGiphySearchReceived(gifs) {
  return {
    type: ON_GIPHY_SEARCH_RECEIVED,
    gifs,
  };
}

export function onGiphySearchStarted() {
  return {
    type: ON_GIPHY_SEARCH_STARTED,
  };
}

export function onGiphySearch(searchKey) {
  return dispatch => {
    dispatch(onGiphySearchStarted());
    const url = `https://api.giphy.com/v1/gifs/search?api_key=A9XY7wrVlzud7cFPrqOUAUw0dlOjHYhu&q=${searchKey}&limit=25&offset=0&rating=G&lang=en`;
    fetch(url, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(response => {
        dispatch(onGiphySearchReceived(response.data));
      });
  };
}
