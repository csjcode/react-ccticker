import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import "./DataBranchNews.css";
import LoadingView from "../../common/LoadingView/LoadingView";
import ErrorView from "../../common/ErrorView/ErrorView";
import NewsDataView from "../../common/NewsDataView/NewsDataView";
import newsapikey from "../../private/newsapikey";
import { apiNewsRequest, showLoading } from "../../actions/news-actions";

class DataBranchNews extends Component {
  state = {
    loading: true
  };

  componentDidMount(props) {
    var date = new Date();
    var yesterday = date - 1000 * 60 * 60 * 24 * 4;
    var date = new Date(yesterday);
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const d5 = date.getDate() - 5;
    const dateline = `${y}-${m}-${d}`;

    this.props.onNewsApiRequest(this.props.query, dateline, newsapikey);
  }

  render() {
    if (this.props.data === "loading") {
      return <LoadingView />;
    } else if (this.props.data) {
      return <NewsDataView data={this.props.data} limit={this.props.limit} />;
    } else {
      return <ErrorView />;
    }
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    data: state.news,
    loading: state.loading
  };
};

const mapDispatchToProps = {
  onNewsApiRequest: apiNewsRequest
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DataBranchNews));
