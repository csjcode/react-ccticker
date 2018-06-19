import React from "react";
import LoadingView from "../LoadingView/LoadingView";
import ErrorView from "../ErrorView/ErrorView";
import MarketDataView from "../MarketDataView/MarketDataView";

const MarketDataBranch = ({ loading, data, onlyFavorites, rows24hHigh, rows7DayLow }) => {
  if (loading) {
    return <LoadingView />;
  } else if (data) {
    return <MarketDataView 
            data={data} 
            onlyFavorites={onlyFavorites} 
            rows24hHigh={rows24hHigh} 
            rows7DayLow={rows7DayLow}
            />;
  } else {
    return <ErrorView />;
  }
};

export default MarketDataBranch;
