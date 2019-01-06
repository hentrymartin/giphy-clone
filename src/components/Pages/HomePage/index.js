import React from 'react';
import PropTypes from 'prop-types';
import Input from './../../FormComponents/Input';
import DisplayGIFs from './../../DisplayGIFs';
import './HomePage.css';

const HomePage = props => {
  return (
    <div className="home-page-wrapper">
      {/* Input Wrapper */}
      <div className="home-page-wrapper__giphy-search">
        <Input theme="search" placeholder="Search GIF's" value={props.searchKey} onChange={props.onGiphySearchChange} />
      </div>
      {/* Display GIFS */}
      <DisplayGIFs gifs={props.gifs} isLoading={props.isLoading} />
    </div>
  );
};

HomePage.defaultProps = {
  searchKey: '',
  gifs: [],
  onGiphySearchChange: () => {},
};

HomePage.propTypes = {
  searchKey: PropTypes.string,
  gifs: PropTypes.array,
  onGiphySearchChange: PropTypes.func,
};

export default HomePage;
