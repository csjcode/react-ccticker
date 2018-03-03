import React, { Component, Fragment } from 'react';
import './NewsPage.css';
import LoadingView from '../../common/LoadingView/LoadingView';
import ErrorView from '../../common/ErrorView/ErrorView';
import newsapikey from '../../private/newsapikey';
// import ContentSection from '../../containers/ContentSection/ContentSection';
import PropTypes from 'prop-types';

const NewsDataMap = (props) => {

  return props.data.articles.map((article)=>{
    // console.log(article)
    return( <div>
      <h3><a href={article.url}>{article.title}</a></h3>
      <p>{article.description}</p>
    </div>
    );
  });


  // return console.log(props.data.articles[0])
  // return props.data.articles.map((articles)=>{
  //   <div>
  //     <h3>{articles.title}</h3>
  //     <p>{articles.description}</p>
  //   </div>
  // });
}

const NewsDataView = (props) => (
  <Fragment>
  <div className="NewsPage--container">
    {/* <ContentSection /> */}
    <div className="NewsPage--container-inner">
      <div className="NewsPage--pagename">
        <h1>Coin News</h1>
        <h3>Bitcoin News Updates</h3>
      </div>
      <div>
        {/* {console.log('OK - ' + JSON.stringify(props.data))} */}
      <NewsDataMap data={props.data}/>
      </div>
    </div>
  </div>
</Fragment>
);

const DataBranch = ({ loading, data }) => {
  if (loading) {
    return <LoadingView />;
  } else if (data) {
    // var jsonData = JSON.stringify(data);
    return <NewsDataView data={data} />;    
  } else {
    return <ErrorView />;
  }
};

class NewsPage extends Component {
  static propTypes = {

  }

  state = {
    loading: true
  }

  componentDidMount(){

    var url = 'https://newsapi.org/v2/everything?' +
    'q=Bitcoin&' +
    'from=2018-03-01&' +
    'sortBy=popularity&' +
    'apiKey=' + newsapikey;

    fetch(url)
    .then(res => res.json())
    .then(
      data => this.setState(prev => ({ loading: false, data})),
      error => this.setState(prev => ({ loading: false, error }))
    );

  }

  render() {
    return <DataBranch {...this.state} />;
  }
}

export default NewsPage;
