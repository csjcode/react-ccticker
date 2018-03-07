import React, { Component, Fragment } from 'react';
import './NewsPage.css';
import LoadingView from '../../common/LoadingView/LoadingView';
import ErrorView from '../../common/ErrorView/ErrorView';
import NewsDataMap from '../../common/NewsDataMap/NewsDataMap';
import NewsDataView from '../../common/NewsDataView/NewsDataView';
import DataBranchNews from '../../containers/DataBranchNews/DataBranchNews';

// import ContentSection from '../../containers/ContentSection/ContentSection';
import PropTypes from 'prop-types';

class NewsPage extends Component {
  static propTypes = {

  }
  render() {
    return (
      <div className="NewsPage--container">
      {/* <ContentSection /> */}
        <div className="NewsPage--container-inner">
          <div className="NewsPage--pagename">
            <h1>Coin News</h1>
            <h3>Bitcoin News Updates</h3>
          </div>
          <div>
            <DataBranchNews query="Bitcoin" limit="25" /> 
          </div>
        </div>
      </div>
    );         

  }
}

export default NewsPage;
