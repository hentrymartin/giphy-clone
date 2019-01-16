import React, { Component } from 'react';
import Avatar from './../../Avatar';
import { MoonLoader } from 'react-spinners';
import './GIFDetailsPage.css';

class GIFDetailsPage extends Component {
  componentDidMount() {
    const { props } = this;
    this.props.onGetGIFDetails(props.match.params.id);
  }

  render() {
    return (
      <div className="details-page-wrapper">
        <h2 className="details-page-wrapper__title">{this.props.gif.title}</h2>
        {this.props.isLoading && (
          <div className="details-page-wrapper__loader">
            <MoonLoader sizeUnit={'px'} size={150} color={'#fc972e'} loading={this.props.isLoading} />
          </div>
        )}
        {!this.props.isLoading && <Avatar src={this.props.gif.images && this.props.gif.images.fixed_width.webp} />}
      </div>
    );
  }
}

export default GIFDetailsPage;
