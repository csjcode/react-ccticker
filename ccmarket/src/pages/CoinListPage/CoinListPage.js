import React, { Component } from "react";
import "./CoinListPage.css";
import CoinListSection from "../../containers/CoinListSection/CoinListSection";
import PropTypes from "prop-types";

const CoinListPage = props => {
  return (
    <div>
      <CoinListSection {...props} />
    </div>
  );
};

CoinListPage.propTypes = {
  pageOn: PropTypes.string.isRequired
};

export default CoinListPage;
