import React, { Component, Fragment } from "react";
import "./TestPage.css";
import DataSymbol from "../../containers/DataSymbol/DataSymbol";
import { Button } from "material-ui";
// import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import { updateUser } from "../../actions/user-actions";
import { apiRequest, clearCoinlist } from "../../actions/coinlist-actions";

class TestPage extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.onUpdateCoinlist = this.onUpdateCoinlist.bind(this);
    this.onUpdateUserInput = this.onUpdateUserInput.bind(this);
    this.onClearCoinlist = this.onClearCoinlist.bind(this);
  }

  componentDidMount() {
    this.props.onApiRequest();
  }

  onUpdateUser() {
    this.props.onUpdateUser("csjower");
  }

  onUpdateCoinlist() {
    this.props.onApiRequest();
  }

  onClearCoinlist() {
    this.props.onClearCoinlist();
  }

  onUpdateUserInput(event) {
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    if (this.props.coinlist.length > 0) {
      var id, title, body;
      var renderThis = this.props.coinlist.map((item, id) => {
        if (id < 20) {
          id = this.props.coinlist[id]["id"];
          title = this.props.coinlist[id]["title"];
          body = this.props.coinlist[id]["body"];
          // console.log(`${id} ${title} ${body}`);
          return (
            <div style={{ margin: 20 }}>
              {id} - {title} - {body}
            </div>
          );
        }
      });
    }

    return (
      <Fragment>
        <div style={{ padding: 20 }}>
          <DataSymbol />
        </div>
        <div style={{ padding: 20 }}>
          <Button raised onClick={this.onUpdateUser}>
            Update User
          </Button>
        </div>
        <div style={{ padding: 20 }}>
          <input onChange={this.onUpdateUserInput} />
        </div>
        <div style={{ padding: 20 }}>
          <Button raised onClick={this.onUpdateCoinlist}>
            Update Coinlist
          </Button>{" "}
          <Button raised onClick={this.onClearCoinlist}>
            Clear Coinlist
          </Button>
        </div>

        <div style={{ padding: 20 }}>{this.props.user}</div>
        <div style={{ padding: 20 }}>{renderThis && renderThis}</div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  // console.log(props);
  return {
    products: state.products,
    user: state.user,
    coinlist: state.coinlist,
    coinlistFavorites: `${state.user} ${props.myCoins}`,
    apiRequest: props.apiRequest,
    clearCoinlist: props.clearCoinlist
  };
};

const mapDispatchToProps = {
  onUpdateUser: updateUser,
  onUpdateUserInput: updateUser,
  onApiRequest: apiRequest,
  onClearCoinlist: clearCoinlist
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
