import React, { Component } from 'react';
import Avatar from './../../Avatar';
import { MoonLoader } from 'react-spinners';
import './RandomPage.css';

class RandomPage extends Component {
  componentDidMount() {
    this.props.onRandomGIFLoad();
  }

  render() {
    return (
      <div className="random-page-wrapper">
        <h2 className="random-page-wrapper__title">{this.props.gif.title}</h2>
        {this.props.isLoading && (
          <div className="random-page-wrapper__loader">
            <MoonLoader sizeUnit={'px'} size={150} color={'#fc972e'} loading={this.props.isLoading} />
          </div>
        )}
        {!this.props.isLoading && <Avatar src={this.props.gif.images && this.props.gif.images.fixed_width.webp} />}
      </div>
    );
  }
}

export default RandomPage;
