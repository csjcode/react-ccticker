import React from "react";
import LoadingView from "../LoadingView/LoadingView";
import ErrorView from "../ErrorView/ErrorView";
import MarketDataView from "../MarketDataView/MarketDataView";

const MarketDataBranch = (props) => {
  // var { loading, data, onlyFavorites, rows24hHigh, rows7DayLow, rows7DayHigh } = props;
  if (props.loading) {
    return <LoadingView {...props} />;
  } else if (props.data) {
    return <MarketDataView 
            {...props}
            />;
  } else {
    return <ErrorView {...props} />;
  }
};

export default MarketDataBranch;
