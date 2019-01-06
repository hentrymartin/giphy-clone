import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from './../../Avatar';
import SearchIcon from './../../../images/search.svg';
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isError: false,
    };
  }

  onChange = e => {
    const { value } = e.target;
    this.props.onChange(value);
  };

  render() {
    const { props } = this;
    return (
      <div className="input-wrapper">
        <input
          value={props.value}
          placeholder={props.placeholder}
          onChange={this.onChange}
          ref={props.onInputLoaded}
          onKeyPress={props.onKeyPress}
        />
        {this.props.isError && <div className="input-wrapper__error-message">Something horribly wrong</div>}
        {this.props.theme === 'search' && <Avatar src={SearchIcon} />}
      </div>
    );
  }
}

Input.defaultProps = {
  value: '',
  onChange: () => {},
  onInputLoaded: () => {},
  onKeyPress: () => {},
  placeholder: 'Write something',
  isError: false,
  theme: 'search',
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onInputLoaded: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  isError: PropTypes.bool,
  theme: PropTypes.oneOf(['search', 'text']),
};

export default Input;
