import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./CoinListSection.css";
import LoadingView from "../../common/LoadingView/LoadingView";
import ErrorView from "../../common/ErrorView/ErrorView";
import { Paper , TableBody} from "material-ui";
import numberWithCommas from "../../utils/numberWithCommas";
import coinListDescriptions from "../../data/coinlist-description.js";

var myArr = coinListDescriptions.split("\n").map(x => x.split("|"));

class CoinListSection extends Component {
  state = {
    coinlist: []
  };

  componentDidMount() {
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=100")
      .then(res => res.json())
      .then(
        coinlist => this.setState(prev => ({ loading: false, coinlist })),
        error => this.setState(prev => ({ loading: false, error }))
      );
  }

  renderError = () => <ErrorView />;

  renderLoading = () => <LoadingView />;

  renderCoinList = () => {
    return (
      <div style={{ marginTop: 30 }}>
        <Paper style={{ maxWidth: 1000, margin: "0 auto", padding: 20 }}>
          <div style={{ marginLeft: 30 }}>
            <h1>Top 100 Coin List</h1>
            <h4>
              A descriptive listing of the 100 of the most active
              cryptocurrencies
            </h4>
          </div>
          <table style={{ padding: 20, maxWidth: 900 }}>
          <tbody>
            <tr>
              <th style={{ width: 50 }} />
              <th style={{ width: 150 }} />
              <th style={{ width: 50 }} />
              <th />
              <th />
            </tr>
            
            {this.renderTableRows()}
            </tbody>
          </table>
          {/* {this.renderCoinListDescription()}  */}
        </Paper>
      </div>
    );
  };

  renderTableRows() {
    // return(

    return this.state.coinlist.map((data, index) => {
      data["24h_volume_usd"] = Math.trunc(data["24h_volume_usd"]);

      var price_usd = "$" + parseFloat(data.price_usd).toFixed(2);
      var price_usd_commas = numberWithCommas(price_usd);

      var description = "";
      for (var i = 0; i < myArr.length; i++) {
        if (myArr[i][1].trim() === data.symbol) {
          description = myArr[i][2].trim();
          // console.log(description);
        }
      }

      return (
        <tr key={data.rank}>
          <td style={{ padding: 20, width: 50 }}>{data.rank}</td>
          <td style={{ padding: 20, width: 150 }}>{data.name}</td>
          <td style={{ padding: 20, width: 50 }}>{data.symbol}</td>
          <td style={{ padding: 20, width: 50 }}>{price_usd_commas}</td>
          <td style={{ padding: 20 }}>{description}</td>
        </tr>
      );
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div style={{ marginTop: 30 }}>
          <Paper style={{ maxWidth: 1000, margin: "0 auto", padding: 20 }}>
            <div style={{ marginLeft: 30 }}>
              <h3>Top 100 Coin List</h3>
              <h4>
                A descriptive listing of the 100 of the most active
                cryptocurrencies
              </h4>
              <LoadingView />
            </div>

            <table style={{ padding: 20, maxWidth: 900 }}>
              <tr>
                <th style={{ width: 50 }} />
                <th style={{ width: 150 }} />
                <th style={{ width: 50 }} />
                <th />
                <th />
              </tr>
            </table>
          </Paper>
        </div>
      );
    } else if (this.state.coinlist) {
      return this.renderCoinList();
    } else {
      return this.renderError();
    }
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    coinlist: state.coinlist
  };
};

export default connect(mapStateToProps)(CoinListSection);
