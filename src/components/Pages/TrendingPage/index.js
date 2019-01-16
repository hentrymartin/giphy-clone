import React, { Component } from 'react';
import DisplayGIFs from './../../DisplayGIFs';
import Input from './../../FormComponents/Input';
import './TrendingPage.css';

class TrendingPage extends Component {
  componentDidMount() {
    this.props.onTrendingGifsLoad();
  }

  render() {
    return (
      <div className="trending-page-wrapper">
        <div className="trending-page-wrapper__giphy-search">
          <Input value={this.props.searchKey} onChange={this.props.onSearchTrendingGIFS} />
        </div>
        <DisplayGIFs gifs={this.props.gifs} isLoading={this.props.isLoading} />
      </div>
    );
  }
}

export default TrendingPage;
