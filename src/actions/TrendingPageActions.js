export const ON_RECEIVED_TRENDING_GIFS = 'ON_RECEIVED_TRENDING_GIFS';
export const ON_TRENDING_GIFS_LOAD_STARTED = 'ON_TRENDING_GIFS_LOAD_STARTED';
export const ON_SEARCH_TRENDING_GIFS = 'ON_SEARCH_TRENDING_GIFS';

export function onReceivedTrendingGIFS(gifs) {
  return {
    type: ON_RECEIVED_TRENDING_GIFS,
    gifs,
  };
}

export function onTrendingGIFSLoadStarted() {
  return {
    type: ON_TRENDING_GIFS_LOAD_STARTED,
  };
}

export function onSearchTrendingGIFS(searchKey) {
  return {
    type: ON_SEARCH_TRENDING_GIFS,
    searchKey,
  };
}

export function onTrendingGifsLoad() {
  return dispatch => {
    dispatch(onTrendingGIFSLoadStarted());
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=A9XY7wrVlzud7cFPrqOUAUw0dlOjHYhu&limit=25&offset=0&rating=G&lang=en`;
    fetch(url, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(response => {
        dispatch(onReceivedTrendingGIFS(response.data));
      });
  };
}
