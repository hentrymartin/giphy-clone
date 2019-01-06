import React from 'react';
import PropTypes from 'prop-types';
import MoonLoader from 'react-spinners/MoonLoader';
import Avatar from './../Avatar';
import './DisplayGIFs.css';

const DisplayGIFs = props => {
  return (
    <div className="display-gifs-wrapper">
      {props.isLoading && (
        <div className="display-gifs-wrapper__loader">
          <MoonLoader sizeUnit={'px'} size={150} color={'#fc972e'} loading={props.isLoading} />
        </div>
      )}
      {!props.isLoading &&
        props.gifs.map((gif, index) => {
          return (
            <div className="display-gifs-wrapper__gif" key={index}>
              <Avatar src={gif.images.fixed_width.webp} />
            </div>
          );
        })}
    </div>
  );
};

DisplayGIFs.defaultProps = {
  gifs: [],
  isLoading: false,
};

DisplayGIFs.propTypes = {
  gifs: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default DisplayGIFs;
