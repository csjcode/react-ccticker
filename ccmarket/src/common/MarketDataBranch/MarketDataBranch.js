import React from "react";
import LoadingView from "../LoadingView/LoadingView";
import ErrorView from "../ErrorView/ErrorView";
import MarketDataView from "../MarketDataView/MarketDataView";

const MarketDataBranch = ({ loading, data, onlyFavorites }) => {
  if (loading) {
    return <LoadingView />;
  } else if (data) {
    return <MarketDataView data={data} onlyFavorites={onlyFavorites} />;
  } else {
    return <ErrorView />;
  }
};

export default MarketDataBranch;
